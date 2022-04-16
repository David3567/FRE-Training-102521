import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.interface';

@Injectable()
export class TodoService {
  todoPath = 'todos';

  arr = [];

  todolist$?: Observable<Todo[]>;

  constructor(
    private http: HttpClient,
    @Optional() @Inject('baseUrl') private baseurl: string
  ) {
    console.log(this.baseurl);
    this.todolist$ = this.http
      .get<Todo[]>([this.baseurl, this.todoPath].join('/'))
      .pipe(catchError((err) => throwError(err)));
  }

  getAllTodos: () => Observable<Todo[]> = () =>
    this.http.get<Todo[]>([this.baseurl, this.todoPath].join('/'));

  deleteTodo = (id: string): Observable<Object> => {
    return this.http.delete([this.baseurl, this.todoPath, id].join('/'));
  };
  addTodo = (newtodo: Todo): Observable<Todo> => {
    return this.http.post<Todo>(
      [this.baseurl, this.todoPath].join('/'),
      newtodo
    );
  };
}
