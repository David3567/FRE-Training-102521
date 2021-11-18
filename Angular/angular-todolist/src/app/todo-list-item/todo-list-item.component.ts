import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo?: Todo;
  @Output() deletedTodoId = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete() {
    this.deletedTodoId.emit(this.todo?.id);
  }
}
