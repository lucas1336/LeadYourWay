import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email == '') {
      alert('Ingrese un correo valido');
      return;
    }

    console.log(this.email);
    alert('Correo Enviado!\nRevise su bandeja de entrada y siga las instrucciones');
    this.router.navigate(['/login']);
  }
}
