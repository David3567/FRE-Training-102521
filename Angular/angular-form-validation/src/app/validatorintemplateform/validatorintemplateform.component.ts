import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validatorintemplateform',
  templateUrl: './validatorintemplateform.component.html',
  styleUrls: ['./validatorintemplateform.component.scss'],
})
export class ValidatorintemplateformComponent implements OnInit {
  contact: any;

  constructor() {}

  ngOnInit(): void {
    this.contact = {
      firstname: '',
      lastname: '',
      gender: 'male',
      isToc: true,
      email: '',
    };
  }

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}

export interface contact {
  firstname: string;
  lastname: string;
  gender: string;
  isToc: boolean;
  email: string;
}
