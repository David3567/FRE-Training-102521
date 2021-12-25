import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  updateUserID=''
  updateUserData:any = {};
  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit(): void {
    
  }
  updateUser(){
    this._auth.updateUser(this.updateUserID,this.updateUserData).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
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
}
