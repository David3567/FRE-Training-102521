import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.interface';
import * as TodoActions from './todo.actions';

const initState: TodoState = {
  todolist: [],
};

export const todoreducer = createReducer(
  initState,
  on(TodoActions.initTodoList, (state): TodoState => {
    return { ...state };
  }),
  on(TodoActions.loadTodosSuccess, (state, action): TodoState => {
    return {
      ...state,
      todolist: action.todolist,
      err: '',
    };
  }),
  on(TodoActions.loadTodosFailure, (state, action): TodoState => {
    return {
      ...state,
      todolist: [],
      err: action.err,
    };
  }),
  on(TodoActions.addTodoSuccess, (state, action): TodoState => {
    return {
      ...state,
      todolist: [action.todo, ...state.todolist],
      err: '',
    };
  }),
  on(TodoActions.addTodoFailure, (state, action): TodoState => {
    return {
      ...state,
      todolist: [],
      err: action.err,
    };
  }),
  on(TodoActions.deleteTodoSuccess, (state, action): TodoState => {
    const newtodolist = state.todolist.filter(
      (ele: any) => +ele.id !== +action.todoId
    );

    return {
      ...state,
      todolist: newtodolist,
      err: '',
    };
  }),
  on(TodoActions.deleteTodoFailure, (state, action): TodoState => {
    return {
      ...state,
      todolist: [],
      err: action.err,
    };
  })
);
