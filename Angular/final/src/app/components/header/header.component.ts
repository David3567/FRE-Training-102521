import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  userRole!:string;
  private authListenrSubs!: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
     this.userIsAuthenticated = this.authService.getIsAuth();
     this.userRole = this.authService.getUserRole();
     this.authListenrSubs = this.authService
     .getAuthStatusListener()
     .subscribe((userRole) => {
        this.userRole = userRole;
     });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
      this.authListenrSubs.unsubscribe();
  }

}
