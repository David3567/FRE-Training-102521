import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Post } from './shared/post.interface'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuthUser();
  }
}
