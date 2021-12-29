import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy{
  isLoading = false;
  private authStatusSub!: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authStatusSub = this.authService
    .getAuthStatusListener()
    .subscribe(
      authStaus => {
        if (authStaus === null) {
          this.isLoading = false;
        }
      }
    );

  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(
      form.value.email, 
      form.value.password,
      form.value.userRole
      );
  
  }

  ngOnDestroy(): void {
      this.authStatusSub.unsubscribe();
  }

}
