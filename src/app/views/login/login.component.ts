import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor() {}

  onSubmit() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.rememberMe);
  }
}
