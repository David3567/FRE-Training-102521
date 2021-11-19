import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/core/todo.service";
import { Todo } from "src/app/todo.interface";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TodolistComponent implements OnInit {
  inputval = "";
  todolist: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((todolist) => {
      this.todolist = todolist as Todo[];
    });
  }

  deletetodo(id: string) {
    console.log(id);
    this.todolist = this.todolist.filter((ele: any) => +ele.id !== +id);
    this.todoService.deleteTodo(id).subscribe((_) => {
      console.log("delete");
    });
  }

  addtodo() {
    const newtodo: Todo = {
      userId: "12",
      title: this.inputval,
      completed: false,
    };
    this.todoService.addTodo(newtodo).subscribe((todo: any) => {
      this.todolist = [todo, ...this.todolist]; // inmutable
      // this.todolist.unshift(todo); // mutable
    });
    this.inputval = "";
  }
}
