import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BicycleService } from 'src/app/services/bicycle.service';
import { BicycleModule2 } from 'src/app/models/bicycle-model.model';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.component.html',
  styleUrls: ['./add-bicycle.component.scss'],
})
export class AddBicycleComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  bicycle!: BicycleModule2;
  id!: number | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bicycleService: BicycleService,
    private formBuilder: FormBuilder
  ) {
    this.firstFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
    });
    this.secondFormGroup = new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });
    this.thirdFormGroup = new FormGroup({
      image: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? parseInt(idParam, 10) : null;
  }

  onSubmit() {
    this.bicycle = {
      id: 0,
      bicycleName: this.firstFormGroup.get('title')?.value,
      bicycleDescription: this.firstFormGroup.get('description')?.value,
      bicyclePrice: this.firstFormGroup.get('price')?.value,
      bicycleSize: this.firstFormGroup.get('size')?.value,
      bicycleModel: this.secondFormGroup.get('address')?.value,
      imageData: null,
      availabilities: [],
    };

    this.bicycleService.createItem(Number(this.id), this.bicycle).subscribe((data) => {
      //this.router.navigate(['/']);
      console.log('Exitos!!!');
    });
  }
}
