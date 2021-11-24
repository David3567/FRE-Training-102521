import { Component, OnInit, Input } from '@angular/core';
import { BLOGS } from '../mock-blog';
import { Blog } from '../Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blogs: Blog[] = BLOGS;
  titleColor = "";

  constructor() { }

  ngOnInit(): void {
  }
  getTitleColor(color:string) {
    this.titleColor = color;
  }

}
