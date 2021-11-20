import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  contentArr = [{title:"Blue Box",text:`fdsfzxvdgdggg`,color:"blue"},
  {title:"Red Box",text:`fdsfzxvdgdggg`,color:"red"},
  {title:"Green Box",text:`fdsfzxvdgdggg`,color:"green"}];
  textColor:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  
  colorChange(color:string){
    this.textColor=color;
  }
}
