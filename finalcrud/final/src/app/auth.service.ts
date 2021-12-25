import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from "rxjs/operators"; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="http://localhost:3000/api/register"
  private _loginUrl="http://localhost:3000/api/login"
  private _userList="http://localhost:3000/api/userList/"
  private _RoleVerification="http://localhost:3000/api/userList/"

  constructor(private http: HttpClient,private _router:Router) { }

  adminCheck=false;

  registerUser(user:any){
    if(user.role=="admin"){
      this.adminCheck=true;
    }
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user:any){
    if(user.role=="admin"){
      this.adminCheck=true;
    }
    return this.http.post<any>(this._loginUrl, user)
  }
    getUserList(){
    return this.http.get<any>(this._userList)
      }

  deleteUser(id:string){
    return this.http.delete(this._userList+id);
  }

  updateUser(id:string,user:any){
    return this.http.put(this._userList+id,user);
  }

  isAdmin(){
    return this.adminCheck;
}

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    this.adminCheck=false;
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}

