import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { User } from './User.interface';

@Injectable({
    providedIn:'root'
})
export class UserService {
    private users: User[] = [];
    private userUpdated = new Subject<{users: User[]}>();
    baseUrl: string = "http://localhost:3000/api/user/users";

    constructor(private http:HttpClient, private router: Router) {}

    getUsers() {
        this.http.get<{users: any}> (this.baseUrl)
        .pipe(
            map((userData) => {
                return {
                    users: userData.users.map((user: any) => {
                        return {
                            id:user._id,
                            email:user.email,
                            userRole:user.userRole,
                        };
                    })
                };
            })
        )
        .subscribe((transformedUsersData) => {
            this.users = transformedUsersData.users;
            this.userUpdated.next({
                users:[...this.users],
            });
        })
    }

    getUsersUpdatedListener() {
        return this.userUpdated.asObservable();
    }

    deletePost(userId: string) {
        return this.http.delete("http://localhost:3000/api/user/" + userId);
    }

    // deletePost(postId: string) {
    //     return this.http
    //       .delete("http://localhost:3000/api/posts/" + postId);
    //   }
}