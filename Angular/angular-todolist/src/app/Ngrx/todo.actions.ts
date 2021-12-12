import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const initTodoList = createAction('[TodoList] Initialize TotoList');

export const loadTodolist = createAction('[TodoList] Load TotoList');

export const loadTodosSuccess = createAction(
  '[TodoList] Load TodoList Success',
  props<{ todolist: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[TodoList] Load TodoList Failed',
  props<{ err: string }>()
);

export const addTodo = createAction(
  '[TodoList] add Todo',
  props<{ todo: Todo }>()
);
export const addTodoSuccess = createAction(
  '[TodoList] add Todo Success',
  props<{ todo: Todo }>()
);
export const addTodoFailure = createAction(
  '[TodoList] add Todo Failed',
  props<{ err: string }>()
);

export const deleteTodo = createAction(
  '[TodoList] delete Todo',
  props<{ todoId: string }>()
);
export const deleteTodoSuccess = createAction(
  '[TodoList] delete Todo Success',
  props<{ todoId: string }>()
);
export const deleteTodoFailure = createAction(
  '[TodoList] delete Todo Failed',
  props<{ err: string }>()
);
