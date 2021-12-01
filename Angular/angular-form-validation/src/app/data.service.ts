import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const baseURL = 'https://jsonplaceholder.typicode.com/todos';
    const value: string = control.value;
    // const targetStr = 'delectus aut autem';

    return this.http.get(baseURL).pipe(
      switchMap((data: any) => {
        const arr = data.find((ele: any) => ele.title === value);

        if (arr) {
          return of({ InValid: true });
        } else {
          return of(null);
        }
      })
    );
  };
}
