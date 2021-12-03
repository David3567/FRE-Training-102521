import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor() {}

  getTodos() {}
}
