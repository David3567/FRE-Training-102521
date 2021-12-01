import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-customvalidator',
  templateUrl: './customvalidator.component.html',
  styleUrls: ['./customvalidator.component.scss'],
})
export class CustomvalidatorComponent implements OnInit {
  myForm: any;

  get numVal() {
    return this.myForm.get('numVal');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      numVal: ['', [customValidatorWithArgs(5)]],
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

// function customValidator(control: AbstractControl): ValidationErrors | null {
//   if (isNaN(+control.value)) {
//     return { nan: true };
//   }
//   if (control.value.length <= 10) {
//     return { minlen: true, requiredValue: 10 };
//   }
//   return null;
// }

function customValidatorWithArgs(minlen: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const v = +control.value;

    if (isNaN(v)) {
      return { nan: true };
    }
    if (v.toString().length <= +minlen) {
      return { minlen: true, requiredValue: minlen };
    }
    return null;
  };
}
