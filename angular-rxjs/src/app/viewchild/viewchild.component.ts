import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss'],
})
export class ViewchildComponent implements OnInit {
  // @ViewChild(ChildComponent, { static: false }) child?: ChildComponent;
  @ViewChild('child', { static: false }) child?: ChildComponent;
  @ViewChild('incrementbtn', { static: false }) btn!: ElementRef;

  showCounter: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    console.log(this.btn);
    this.btn.nativeElement.innerHTML = 'Hello World';
    this.child?.increment();
  }

  decrement() {
    console.log(this.child);
    this.child?.decrement();
  }
}
