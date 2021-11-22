import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // baseurl = 'http://localhost:3000';
  baseurl = 'https://jsonplaceholder.typicode.com';
  todoPath = 'todos';
  todolist$?: Observable<Todo[]>;

  constructor(private http: HttpClient) {
    this.todolist$ = this.http
      .get([this.baseurl, this.todoPath].join('/'))
      .pipe() as Observable<Todo[]>;
  }

  // getAllTodos: () => Observable<Todo[]> = () =>
  //   this.http.get([this.baseurl, this.todoPath].join('/')) as Observable<
  //     Todo[]
  //   >;

  deleteTodo = (id: string): Observable<Object> => {
    return this.http.delete([this.baseurl, this.todoPath, id].join('/'));
  };
  addTodo = (newtodo: Todo): Observable<Todo> => {
    return this.http.post(
      [this.baseurl, this.todoPath].join('/'),
      newtodo
    ) as Observable<Todo>;
  };
}
