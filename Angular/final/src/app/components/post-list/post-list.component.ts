import { Component, OnInit , Input, OnDestroy} from '@angular/core';
import { Post } from '../../shared/post.interface';
import { PostService } from '../../shared/post.service';
import { Subscription } from 'rxjs';
import { SafePipe } from 'src/app/shared/safe.pipe';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  private postsSub!: Subscription;
  totalPosts = 0;
  postsPerPage = 5;
  postsCurPage = this.postsPerPage;
  currentPage = 1;
  pageSizeOptions = [1,2,5,10];
  userIsAuthenticated = false;
  userId!: string;
  userRole!: string;
  private authStatusSub!: Subscription;
  // adding public private key word to create a service property
  constructor(private PostService: PostService, private authService: AuthService) { }
 
  ngOnInit(): void {
    this.isLoading = true;
    this.PostService.getPosts(this.postsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    this.userRole = this.authService.getUserRole();
    this.postsSub = this.PostService
        .getPostUpdateListener()
        .subscribe((postData: {posts:Post[], postCount: number}) => {
          this.isLoading = false;
          this.totalPosts = postData.postCount;
          this.posts = postData.posts;
        });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = 
    this.authService.getAuthStatusListener()
                    .subscribe(userRole => {
                        // this.userIsAuthenticated = isAuthenticated;
                        this.userId = this.authService.getUserId();
                        this.userRole = userRole;
                    });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.PostService.getPosts(this.postsPerPage, this.currentPage);
  }

  onDelete(postID: string) {
    // this.PostService.deletePost(postID).subscribe(()=> {
    //   this.PostService.getPosts(this.postsPerPage, this.currentPage);
    // }, ()=> {
    //   this.isLoading = false;
    // });

    this.isLoading = true;
    this.postsCurPage =
      this.totalPosts - this.postsPerPage * (this.currentPage - 1) - 1 >
      this.postsCurPage
        ? this.postsPerPage
        : this.totalPosts - this.postsPerPage * (this.currentPage - 1) - 1;
    if (this.postsCurPage === 0) {
      this.currentPage -= 1;
    }
    this.PostService.deletePost(postID).subscribe({
      next: () => {
        this.PostService.getPosts(this.postsPerPage, this.currentPage);
      },
      error: () => {
        this.isLoading = false;
      },
    });

  }

  ngOnDestroy(): void {

      this.postsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
  }
  

  

}  
