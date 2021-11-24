import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../Blog';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blog!: Blog;
  @Output() getColor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  emitColor() {
    this.getColor.emit(this.blog.color);
  }

}
