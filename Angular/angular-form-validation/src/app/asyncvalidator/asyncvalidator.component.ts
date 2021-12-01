import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, debounceTime, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-asyncvalidator',
  templateUrl: './asyncvalidator.component.html',
  styleUrls: ['./asyncvalidator.component.scss'],
})
export class AsyncvalidatorComponent implements OnInit {
  myForm: any;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      numVal: ['', null, [this.dataService.validate]],
    });
  }

  get numVal() {
    return this.myForm.get('numVal');
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

function customAsyncValidator(
  control: AbstractControl
): Observable<ValidationErrors | null> {
  const v = +control.value;
  console.log(v);

  if (isNaN(v)) {
    return of({ msg: true });
  }
  if (v.toString().length <= 10) {
    return of({ gte: true, requiredValue: 10 });
  }
  return of(null);
}

interface AsyncValidatorFn {
  (control: AbstractControl):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null>;
}
