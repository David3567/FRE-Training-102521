import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.scss'],
})
export class DropdownlistComponent implements OnInit {
  contactForm: any;

  constructor(private fb: FormBuilder) {}

  country_name = '';
  set_country = '';

  countries = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'Australia' },
    { id: 3, name: 'Canada' },
    { id: 4, name: 'Brazil' },
    { id: 5, name: 'England' },
  ];

  ngOnInit() {
    this.contactForm = this.fb.group({
      country: [null],
    });

    this.setDefaults();

    this.contactForm.get('country').valueChanges.subscribe((f: any) => {
      this.onCountryChanged(f);
    });
  }

  submit() {
    console.log('Form Submitted');
    console.log(this.contactForm.value);
  }

  setDefaults() {
    this.contactForm.get('country').patchValue(null);
  }

  onCountryChanged(value: any) {
    console.log('onCountryChanged');
    console.log(value);
  }

  addCountry() {
    const country = this.countries.find((el) => el.name === this.country_name);
    if (!country) {
      const id = Math.max.apply(
        Math,
        this.countries.map((o) => o.id)
      );
      this.countries.push({ id: id + 1, name: this.country_name });
      this.country_name = '';
    }
  }

  setCountry() {
    const country = this.countries.find((el) => el.name === this.set_country);
    if (country) {
      this.contactForm.get('country').patchValue(country.id);
    }
  }
}
