import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BicycleService } from 'src/app/services/bicycle.service';
import { UserService } from 'src/app/services/user.service';
import { BicycleModule } from 'src/app/models/bicycle.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/components/toasts/dialog-box/dialog-box.component';
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
    private bicycleService: BicycleService,
    private userService: UserService,
    public dialog: MatDialog
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
    this.userService.getItem(this.id).subscribe(
      (data) => {
        if (data.cards.length <= 0) {
          const dialogRef: MatDialogRef<any> = this.dialog.open(DialogBoxComponent, {
            data: {
              title: 'Error',
              message: 'Para publicar una bicicleta debe tener una tarjeta registrada',
            },
          });
          this.router.navigate(['/profile']);
        }
      },
      (error) => {
        const dialogRef: MatDialogRef<any> = this.dialog.open(DialogBoxComponent, {
          data: {
            title: 'Error',
            message: 'Porfavor inicie sesion para poder publicar una bicicleta',
          },
        });
        this.router.navigate(['/home']);
      }
    );
  }

  onSubmit() {
    if (!this.validateForms()) {
      const dialogRef: MatDialogRef<any> = this.dialog.open(DialogBoxComponent, {
        data: {
          title: 'Error',
          message: 'Llena todos los campos',
        },
      });
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
      imageData: this.thirdFormGroup.get('image')?.value,
    };

    this.bicycleService.createItem(Number(this.id), this.bicycle).subscribe((data) => {
      const dialogRef: MatDialogRef<any> = this.dialog.open(DialogBoxComponent, {
        data: {
          title: 'Exitoso',
          message: 'Se registro su bicicleta con exito!',
        },
      });
      this.router.navigate(['/search']);
    });

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
