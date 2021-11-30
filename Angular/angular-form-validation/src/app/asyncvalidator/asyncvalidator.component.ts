import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asyncvalidator',
  templateUrl: './asyncvalidator.component.html',
  styleUrls: ['./asyncvalidator.component.scss'],
})
export class AsyncvalidatorComponent implements OnInit {
  myForm: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      numVal: new FormControl('', null, [gte]),
    });
  }

  get numVal() {
    return this.myForm.get('numVal');
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const baseURL = 'https://jsonplaceholder.typicode.com/todos';
  //   const value: string = control.value;

  //   return this.http.post(baseURL, value).pipe(
  //     debounceTime(500),
  //     map((data: any) => {
  //       if (!data.isValid) {
  //         return { InValid: true }
  //       };
  //       return of(null);
  //     })
  //   );
  // }
}

function gte(control: AbstractControl): Observable<ValidationErrors | null> {
  const v = +control.value;
  console.log(v);

  if (isNaN(v)) {
    return of({ gte: true, requiredValue: 10 });
  }
  if (v <= 10) {
    return of({ gte: true, requiredValue: 10 });
  }
  return of(null);
}

interface AsyncValidatorFn {
  (control: AbstractControl):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null>;
}
