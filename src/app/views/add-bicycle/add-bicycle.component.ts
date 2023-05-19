import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.component.html',
  styleUrls: ['./add-bicycle.component.scss'],
})
export class AddBicycleComponent {
  firstFormGroup = this._formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    size: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    image: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  onSubmit() {
    alert('Form has been succesfully updated');
  }
}
