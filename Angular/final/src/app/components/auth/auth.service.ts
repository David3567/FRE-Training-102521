import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated  = false;
  private token!: string;
  private tokenTimer!: any;
  private userId!: string | any;
  private userRole!: string;
  private authStatusListener = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) { }
  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserRole() {
    return this.userRole;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  


  createUser(email: string, password: string, userRole: string) {
    const authData: AuthData = {email: email, password: password, userRole: userRole};
    return this.http.post("http://localhost:3000/api/user/signup", authData)
    .subscribe(
    //   {
    //   next: () => {
    //     this.router.navigate(['/auth/login']);
    //   },
    //   error: () => {
    //     this.authStatusListener.next();
    //   },
    // }
      () => {
      this.router.navigate(["/"]);
    }, error => {
      this.authStatusListener.next('');
    }
    );
  }



  login(email: string, password: string, userRole: string) {
    const authData: AuthData = { email: email, password: password, userRole: userRole};
    this.http
      .post<{ token: string; expiresIn: number, userRole: string, userId: string }>(
        "http://localhost:3000/api/user/login",
        authData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userRole = response.userRole;
          this.userId = response.userId;
          this.authStatusListener.next(this.userRole);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          // console.log(expirationDate);
          this.saveAuthData(token, expirationDate, this.userRole, this.userId);
          this.router.navigate(["/"]);
        }
      }, error => {
        this.authStatusListener.next('');
      });
  }


  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.userRole = authInformation.userRole;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(this.userRole);
    }
  }

  logout() {
    this.token = "";
    this.isAuthenticated = false;
    this.authStatusListener.next('');
    this.userId = null;
    this.userRole = '';
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  private setAuthTimer(duration: number) {
    // console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userRole: string, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem('userRole', userRole);
    localStorage.setItem("userId", userId);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem('userRole');
    localStorage.removeItem("userId");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userRole = localStorage.getItem('userRole');
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate || !userRole) {
      return "";
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userRole: userRole,
      userId: userId
    }
  }
}

