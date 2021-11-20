import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.component.html',
  styleUrls: ['./news2.component.css']
})
export class News2Component implements OnInit {
  heads: string = '“It’s like the elephant in the room,” Doctors urge caution as COVID-19 cases rise in Oklahoma again';

  constructor() { }

  ngOnInit(): void {
  }

}
