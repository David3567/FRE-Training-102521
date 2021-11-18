import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseurl = 'https://jsonplaceholder.typicode.com';
  todoPath = 'todos';

  constructor(private http: HttpClient) {}

  getAllTodos: () => Observable<Todo[]> = () =>
    this.http.get([this.baseurl, this.todoPath].join('/')) as Observable<
      Todo[]
    >;
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
