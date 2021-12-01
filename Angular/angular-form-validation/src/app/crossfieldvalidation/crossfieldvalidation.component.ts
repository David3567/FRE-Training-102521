import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crossfieldvalidation',
  templateUrl: './crossfieldvalidation.component.html',
  styleUrls: ['./crossfieldvalidation.component.scss'],
})
export class CrossfieldvalidationComponent implements OnInit {
  myForm: any;

  get password() {
    return this.myForm.get('password');
  }
  get confirm() {
    return this.myForm.get('confirm');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        password: ['', [Validators.required]],
        confirm: ['', [Validators.required]],
      },
      { validators: this.matchPassword }
      // {
      //   validators: this.matchPassword2('password', 'confirm'),
      // }
    );
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  matchPassword(group: AbstractControl): ValidationErrors | null {
    console.log(group);

    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;

    if (password !== confirm) {
      return { noMatch: true };
    }
    return null;
  }

  matchPassword2(val1: string, val2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(val1)?.value;
      const confirm = control.get(val2)?.value;

      if (password != confirm) {
        return { noMatch: true };
      }
      return null;
    };
  }
}
