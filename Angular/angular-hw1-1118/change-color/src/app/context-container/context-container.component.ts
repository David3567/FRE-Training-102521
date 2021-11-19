import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-context-container",
  templateUrl: "./context-container.component.html",
  styleUrls: ["./context-container.component.scss"],
})
export class ContextContainerComponent implements OnInit {
  @Input() context: any;
  @Output() getColor = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitColor() {
    this.getColor.emit(this.context.color);
  }
}
