import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BicycleService } from 'src/app/services/bicycle.service';
import { BicycleModule } from 'src/app/models/bicycle-model.model';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.component.html',
  styleUrls: ['./add-bicycle.component.scss'],
})
export class AddBicycleComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  bicycle!: BicycleModule;
  id!: string | null;
  security: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bicycleService: BicycleService
  ) {
    this.firstFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
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
      image: new FormControl(''),
    });
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.bicycleService.getItem(Number(this.id)).subscribe(
      (data) => {},
      (error) => {
        alert('Error retrieving data. Please login to continue.');
        this.router.navigate(['/home']);
      }
    );
  }

  onSubmit() {
    if (!this.validateForms()) {
      alert('Llena todos los campos');
      return;
    }

    this.validateForm1();

    this.bicycle = {
      id: 0,
      bicycleName: this.firstFormGroup.get('title')?.value,
      bicycleDescription: this.firstFormGroup.get('description')?.value,
      bicyclePrice: this.firstFormGroup.get('price')?.value,
      bicycleSize: this.firstFormGroup.get('size')?.value,
      bicycleModel: this.secondFormGroup.get('model')?.value,
      imageData: null,
      availabilities: [],
    };

    this.bicycleService.createItem(Number(this.id), this.bicycle).subscribe((data) => {
      this.router.navigate(['/search']);
    });

    alert(
      'Ahora se estan presentando problemas por nuestra parte, disculpe las molestias, porfavor vuelva a intentarlo mas tarde'
    );

    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
  }

  validateForms() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      return true;
    } else {
      return false;
    }
  }

  validateForm1() {
    if (this.firstFormGroup.get('title')?.value.length > 50) {
      alert(
        'El nombre de la bicicleta no debe exceder los 50 caracteres must be less than 50 characters'
      );
      return;
    }
    if (this.firstFormGroup.get('description')?.value.length > 200) {
      alert(
        'La descripción de la bicicleta no debe exceder los 200 caracteres must be less than 200 characters'
      );
      return;
    }
    if (this.firstFormGroup.get('price')?.value > 1000000) {
      alert('El precio de la bicicleta no debe exceder los 1000000');
      return;
    }
    if (this.firstFormGroup.get('price')?.value <= 0) {
      alert('El precio de la bicicleta debe ser menor a 0');
      return;
    }
  }
}
