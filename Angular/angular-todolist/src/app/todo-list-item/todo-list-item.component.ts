import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Todo } from "../todo.interface";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.scss"],
})
export class TodoListItemComponent implements OnInit {
  // todo = {
  //   userId: 1,
  //   id: 2,
  //   title: 'aut autem',
  //   completed: false,
  // };

  // @Input("item") todo: any;
  @Input() todo?: Todo;
  @Output() deletedTodoId = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete() {
    this.deletedTodoId.emit(this.todo?.id);
  }
}
