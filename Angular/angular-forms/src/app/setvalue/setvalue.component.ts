import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-setvalue',
  templateUrl: './setvalue.component.html',
  styleUrls: ['./setvalue.component.scss'],
})
export class SetvalueComponent implements OnInit {
  reactiveForm: any;
  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];
  get firstname() {
    return this.reactiveForm.get('firstname');
  }

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: '',
      email: '',
      gender: '',
      isMarried: '',
      country: '',
      address: this.fb.group({
        city: '',
        street: '',
        pincode: '',
      }),
    });
  }

  ngOnInit(): void {
    this.setDefault();

    // this.reactiveForm
    //   .get('firstname')
    //   .statusChanges.subscribe((newstatus: any) => {
    //     console.log(newstatus); // get status from form observable
    //     console.log(this.reactiveForm.get('firstname').status); // get current status from formcontrol
    //     console.log(this.reactiveForm.status); // get current status from formgroup
    //     console.log('firstname status changes');
    //   });

    this.firstname.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value: any) => {
        console.log(value);
        console.log('firstname value changed');
      });

    // this.reactiveForm.statusChanges.subscribe((x: any) => {
    //   console.log('form status changes');
    // });

    // this.reactiveForm.valueChanges.subscribe((x: any) => {
    //   console.log(x);
    //   console.log('form value changed');
    // });
  }

  setDefault() {
    const contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: {
        city: 'Mumbai',
        street: 'Perry Cross Rd',
        pincode: '400050',
      },
    };
    this.reactiveForm.setValue(contact);
  }
  setValue() {
    const contact = {
      firstname: 'Rahul',
      lastname: 'Dravid',
      email: 'rahul@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '1',
      address: {
        city: 'Bangalore',
        street: 'Brigade Road',
        pincode: '600070',
      },
    };
    this.reactiveForm.setValue(contact);
  }
  setAddress() {
    const address = {
      city: 'Bangalore',
      street: 'Brigade Road',
      pincode: '600070',
    };
    this.reactiveForm.get('address').setValue(address);
  }
  setCountry() {
    this.reactiveForm.get('country').setValue('1');
  }
  patchAddress() {
    const address = {
      city: 'Bangalore',
      street: 'Brigade Road',
      //pincode: "600070",
      //firstname:'saurv'
    };
    this.reactiveForm.get('address').patchValue(address);
  }
  patchName() {
    const contact = {
      firstname: 'Rahul',
      lastname: 'Dravid',
    };
    this.reactiveForm.patchValue(contact);
  }

  reset() {
    this.reactiveForm.reset();
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
