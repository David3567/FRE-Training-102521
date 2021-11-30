import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../interfaces/contact';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-templateform',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  title = 'Template driven forms';
  contact!: Contact;

  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England'),
  ];

  ngOnInit(): void {
    this.setDefaults();
  }

  onSubmit(contactForm: any) {
    console.log(contactForm);
    console.log(this.contact);
  }

  setDefaults() {
    this.contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: { city: 'Mumbai', street: 'Perry Cross Rd', pincode: '400050' },
    };
  }

  changeCountry() {
    this.contact.country = '1';
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }
}
