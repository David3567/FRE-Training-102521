import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const initTodoList = createAction('[TodoList] Initialize TotoList');

export const loadTodolist = createAction('[TodoList] Load TotoList');

export const loadTodosSuccess = createAction(
  '[TodoList] Load TotoList Success',
  props<{ todolist: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[TodoList] Load TotoList Failed',
  props<{ err: string }>()
);
