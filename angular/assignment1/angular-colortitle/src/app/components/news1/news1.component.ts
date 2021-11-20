import { Component, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.component.html',
  styleUrls: ['./news1.component.css']
})
export class News1Component implements OnInit {
  heads: string = 'Doctors urge caution as COVID-19 cases rise in Oklahoma again';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
    onClick() {
      this.btnClick.emit();
    }


}
