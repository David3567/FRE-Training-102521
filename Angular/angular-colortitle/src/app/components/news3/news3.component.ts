import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-news3',
  templateUrl: './news3.component.html',
  styleUrls: ['./news3.component.css']
})
export class News3Component implements OnInit {
  heads: string = 'Doctors urge caution as COVID-19 cases rise in Oklahoma again';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
    onClick() {
      this.btnClick.emit();
    }


}