import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModule } from 'src/app/models/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  wrongCredentials: boolean = false;
  user!: UserModule;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.email = this.email.trim();
    this.password = this.password.trim();
    this.userService.login(this.email, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('id', String(response));
        this.router.navigate(['/search']);
      },
      (error: any) => {
        this.wrongCredentials = true;
      }
    );
  }
}
