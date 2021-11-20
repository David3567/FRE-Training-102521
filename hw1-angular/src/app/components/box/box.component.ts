import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() content?:any;
  @Output() colorChange = new EventEmitter();
  boxBorder = ""
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.colorChange.emit(this.content?.color)
    this.boxBorder = `${this.content?.color}-border`
  }

}
