import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  nombre: string = '';
  email: string = '';
  contraseña: string = ' ';
  confirmarContraseña: string = '';

  onSubmit() {
    console.log(this.nombre);
    console.log(this.email);
    console.log(this.contraseña);
    console.log(this.confirmarContraseña);
  }
}
