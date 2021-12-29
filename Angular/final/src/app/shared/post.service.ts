import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { title } from 'process';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  // posts is a reference type obj, cannot pass over, use subject instead
  private posts:Post[] = [];
  private postsUpdated = new Subject<{posts: Post[]; postCount: number}>();

  constructor(private http:HttpClient, private router: Router) { }

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; posts: any; maxPosts: number }>(
        "http://localhost:3000/api/posts" + queryParams
      )
      .pipe(
        map(postData => {
          return {
            posts: postData.posts.map( (post: any) => {
              return {
                title: post.title,
                content: post.content,
                id: post._id,
                imagePath: post.imagePath,
                creator: post.creator
              };
            }),
            maxPosts: postData.maxPosts
          };
        })
      )
      .subscribe(transformedPostData => {
        // console.log(transformedPostData);
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts
        });
      });
  }

  getPostUpdateListener() {
     return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{ _id: string; title: string; content: string; imagePath: string; creator: string}>(
      "http://localhost:3000/api/posts/" + id
    );
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("image", image, title);
    this.http
      .post<{ message: string; post: Post }>(
        "http://localhost:3000/api/posts",
        postData
      )
      .subscribe(responseData => {
        this.router.navigate(["/"]);
      });
  }

  updatePost(id: string, title: string, content: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("title", title);
      postData.append("content", content);
      postData.append("image", image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image,
        creator: ""
      };
    }
    this.http
      .put("http://localhost:3000/api/posts/" + id, postData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

  deletePost(postId: string) {
    return this.http
      .delete("http://localhost:3000/api/posts/" + postId);
  }

  
}




// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Subject } from "rxjs";

// import { Post } from './post.interface';

// @Injectable({ providedIn: "root" })
// export class PostsService {
//   private posts: Post[] = [];
//   private postsUpdated = new Subject<Post[]>();

//   constructor(private http: HttpClient) {}

//   getPosts() {
//     this.http
//       .get<{ message: string; posts: Post[] }>(
//         "http://localhost:3000/api/posts"
//       )
//       .subscribe(postData => {
//         this.posts = postData.posts;
//         this.postsUpdated.next([...this.posts]);
//       });
//   }

//   getPostUpdateListener() {
//     return this.postsUpdated.asObservable();
//   }

//   addPost(title: string, content: string) {
//     const post: Post = { id: '', title: title, content: content };
//     this.http
//       .post<{ message: string }>("http://localhost:3000/api/posts", post)
//       .subscribe(responseData => {
//         console.log(responseData.message);
//         this.posts.push(post);
//         this.postsUpdated.next([...this.posts]);
//       });
//   }
// }

