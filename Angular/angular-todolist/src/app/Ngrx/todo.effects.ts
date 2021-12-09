import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as TodoAtions from './todo.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  baseurl = 'https://jsonplaceholder.typicode.com';
  todoPath = 'todos';

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoAtions.loadTodolist),
      switchMap((_) => {
        return this.http.get([this.baseurl, this.todoPath].join('/')).pipe(
          map((todos: any) => {
            return TodoAtions.loadTodosSuccess({ todolist: todos });
          }),
          catchError((err) => {
            return of(TodoAtions.loadTodosFailure({ err: err }));
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
