import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TodoService } from 'src/app/core/todo.service';
import { Todo } from 'src/app/todo.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  inputval = '';
  todolist: Todo[] = [];
  todolist$: any;
  // subscription: any;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todolist$ = this.todoService.todolist$;
    // this.subscription = this.todoService.getAllTodos().subscribe((todolist) => {
    //   this.todolist = todolist as Todo[];
    // });
  }

  deletetodo(id: string) {
    console.log(id);
    this.todolist = this.todolist.filter((ele: any) => +ele.id !== +id);
    this.todoService.deleteTodo(id).subscribe((_: any) => {
      console.log('delete');
    });
  }

  addtodo() {
    const newtodo: Todo = {
      userId: '12',
      title: this.inputval,
      completed: false,
    };
    this.todoService.addTodo(newtodo).subscribe((todo: Todo) => {
      this.todolist = [todo, ...this.todolist]; // inmutable
      // this.todolist.unshift(todo); // mutable
    });
    this.inputval = '';
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.subscription.unsubscribe();
  }
}
