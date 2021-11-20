import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.component.html',
  styleUrls: ['./news2.component.css']
})
export class News2Component implements OnInit {
  heads: string = 'Doctors urge caution as COVID-19 cases rise in Oklahoma again';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
    onClick() {
      this.btnClick.emit();
    }


}
