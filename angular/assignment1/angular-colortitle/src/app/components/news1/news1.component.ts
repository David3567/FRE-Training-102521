import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.component.html',
  styleUrls: ['./news1.component.css']
})
export class News1Component implements OnInit {
  heads: string = '“It’s like the elephant in the room,” Doctors urge caution as COVID-19 cases rise in Oklahoma again';

  constructor() { }

  ngOnInit(): void {
    
  }

}
