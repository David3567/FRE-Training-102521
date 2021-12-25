import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
specialEvents:any = []

updateUserID=''

updateUserData:any = {};

popup = false
popupAddUser=false;
  constructor(private _router: Router,private _auth: AuthService) { }

  ngOnInit(): void {
    this._auth.getUserList()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

  DeleteUser(user_id:any){
      this._auth.deleteUser(user_id).subscribe(
        res=>{
          console.log(res)
        },
        err=>console.log(err)
      )
  }
  popupWindow(user_id:any){
    this.updateUserID=user_id
  }

  registerUser(){
    this.updateUserData.role="user"
    this._auth.registerUser(this.updateUserData).subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token', res.token)
      },
      err=>console.log(err)
    )
    this.popupAddUser=false;
  }

  updateUser(){
    this._auth.updateUser(this.updateUserID,this.updateUserData).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
    this.popup = false
  }


}
