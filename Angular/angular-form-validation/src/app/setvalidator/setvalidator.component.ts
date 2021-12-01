import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-setvalidator',
  templateUrl: './setvalidator.component.html',
  styleUrls: ['./setvalidator.component.scss'],
})
export class SetvalidatorComponent implements OnInit {
  myform: any;

  notifyOptions = ['Email', 'SMS'];

  get notifyVia() {
    return this.myform.get('notifyVia');
  }
  get email() {
    return this.myform.get('email');
  }
  get mobile() {
    return this.myform.get('mobile');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myform = this.fb.group({
      email: [''],
      mobile: [''],
      notifyVia: ['', Validators.required],
    });

    this.notifyVia.valueChanges.subscribe((data: any) => {
      this.changeValidators();
    });
  }

  changeValidators() {
    console.log(this.notifyVia.value);

    if (this.notifyVia.value === 'Email') {
      this.myform.controls.email.setValidators([
        Validators.required,
        Validators.email,
      ]);
      this.myform.controls.mobile.clearValidators();
    } else {
      this.myform.controls.mobile.setValidators([
        Validators.required,
        Validators.minLength(10),
      ]);
      this.myform.controls.email.clearValidators();
    }

    this.email.updateValueAndValidity();
    this.mobile.updateValueAndValidity();
  }

  onSubmit() {
    console.log(this.myform.value);
  }
}
