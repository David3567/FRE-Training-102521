import { createSelector } from '@ngrx/store';
import { Todo, TodoState } from '../interfaces/todo.interface';

export const selectedTodo = (storeState: any): TodoState => {
  return storeState.todos;
};

export const getTodoList = createSelector(
  selectedTodo,
  (state: TodoState): Todo[] => state.todolist
);
