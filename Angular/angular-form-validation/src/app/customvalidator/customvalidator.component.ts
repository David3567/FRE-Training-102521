import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
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

  ngOnInit(): void {
    this.myForm = new FormGroup({
      numVal: new FormControl('', [gtepassval(20)]),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

// function gte(control: AbstractControl): ValidationErrors | null {
//   const v = +control.value;

//   if (isNaN(v)) {
//     return { msg: true };
//   }
//   if (v <= 10) {
//     return { gte: true, requiredValue: 10, msg: 'msg' };
//   }
//   return null;
// }

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

function gtepassval(val: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let v: number = +control.value;

    if (isNaN(v)) {
      return { msg: true };
    }
    if (v <= +val) {
      return { gte: true, requiredValue: val };
    }
    return null;
  };
}
