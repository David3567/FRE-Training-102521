import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
// import { BLOGS } from '../../mock-blogs';
import { Blog } from '../../Blog';

@Component({
  selector: 'app-blog-itm',
  templateUrl: './blog-itm.component.html',
  styleUrls: ['./blog-itm.component.scss']
})
export class BlogItmComponent implements OnInit {
  @Input() blog!: Blog;
  @Output() getColor = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  emitColor() {
    this.getColor.emit(this.blog.color);
  }
  
}



