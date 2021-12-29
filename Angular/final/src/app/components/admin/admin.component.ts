import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user.interface';
import { UserService } from './user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  private usersSub: Subscription = new Subscription();
  users!: User[];
  isLoading: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers();
    console.log(this.userService.getUsers());
    
    this.isLoading = true;
    this.usersSub = this.userService
       .getUsersUpdatedListener()
       .subscribe((userData: {users: User[]}) => {
         this.isLoading = false;
         this.users = userData.users;
       });
  }

  onDelete(userId: string) {
    this.isLoading = true;
    this.userService.deletePost(userId).subscribe(() => {
      this.userService.getUsers();
    });
  }

  ngOnDestroy(): void {
      this.usersSub.unsubscribe();
  }

}
