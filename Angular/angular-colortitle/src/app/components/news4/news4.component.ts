import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news4',
  templateUrl: './news4.component.html',
  styleUrls: ['./news4.component.css']
})
export class News4Component implements OnInit {
  heads: string = 'Doctors urge caution as COVID-19 cases rise in Oklahoma again';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
    onClick() {
      this.btnClick.emit();
    }


}
