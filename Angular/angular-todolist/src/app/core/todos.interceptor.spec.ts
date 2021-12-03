import { TestBed } from '@angular/core/testing';

import { TodosInterceptor } from './todos.interceptor';

describe('TodosInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TodosInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TodosInterceptor = TestBed.inject(TodosInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
