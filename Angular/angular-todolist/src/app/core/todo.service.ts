import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Todo } from '../todo.interface';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TodoService {
  // baseurl = 'http://localhost:3000';
  // baseurl = 'https://jsonplaceholder.typicode.com';
  todoPath = 'todos';
  todolist$?: Observable<Todo[]>;

  constructor(
    private http: HttpClient,
    @Optional() @Inject('baseUrl') private baseurl: string
  ) {
    console.log(this.baseurl);
    this.todolist$ = this.http.get(
      [this.baseurl, this.todoPath].join('/')
    ) as Observable<Todo[]>;
    // .pipe(catchError((err) => console.log))
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
