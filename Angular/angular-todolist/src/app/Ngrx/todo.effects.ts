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

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoAtions.deleteTodo),
      switchMap((action) => {
        return this.http
          .delete([this.baseurl, this.todoPath, action.todoId].join('/'))
          .pipe(
            map((_) => {
              return TodoAtions.deleteTodoSuccess({ todoId: action.todoId });
            }),
            catchError((err: string) => {
              return of(TodoAtions.deleteTodoFailure({ err }));
            })
          );
      })
    );
  });
  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoAtions.addTodo),
      switchMap((action) => {
        return this.http
          .post([this.baseurl, this.todoPath].join('/'), action.todo)
          .pipe(
            map((todo: any) => {
              return TodoAtions.addTodoSuccess({ todo });
            }),
            catchError((err: string) => {
              return of(TodoAtions.addTodoFailure({ err }));
            })
          );
      })
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
