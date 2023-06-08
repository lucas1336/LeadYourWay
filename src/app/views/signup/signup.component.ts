import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Register } from 'src/app/models/register-model';
import { UserModule } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  RegisterData!: Register;
  constructor(private userService: UserService, private router: Router) {
    this.RegisterData = {} as Register;
  }
  control!: boolean;
  userModel!: UserModule;
  firstTry: boolean = true;

  nombreControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl: FormControl = new FormControl('', Validators.required);
  confirmpasswordControl: FormControl = new FormControl('', Validators.required);

  onSubmit() {
    if (this.validateStart()) {
      this.RegisterData.userFirstName = String(this.nombreControl.value);
      this.RegisterData.userEmail = String(this.emailFormControl.value);
      this.RegisterData.userPassword = this.passwordControl.value;
      console.log(this.RegisterData);
      this.control = true;
    } else {
      console.log('Incomplete data');
      this.control = false;
    }
    const nombreValue = this.nombreControl.value;
    if (typeof nombreValue === 'string' && nombreValue.trim() !== '') {
      const nameParts = nombreValue.trim().split(' ');
      this.RegisterData.userFirstName = nameParts[0];
      this.RegisterData.userLastName = nameParts.length > 1 ? nameParts[1] : '';
    }
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    this.RegisterData.userBirthDate = eighteenYearsAgo;
    this.userService.createItem(this.RegisterData).subscribe(
      (response) => {
        this.userService
          .login(this.RegisterData.userEmail, this.RegisterData.userPassword)
          .subscribe((response) => {
            localStorage.setItem('id', String(response));
            this.router.navigate(['/search']);
          });
      },
      (error) => {
        this.firstTry = false;
      }
    );
  }

  validateStart() {
    if (
      this.emailFormControl.hasError('required') ||
      this.emailFormControl.hasError('email') ||
      this.passwordControl.hasError('required') ||
      this.confirmpasswordControl.hasError('required') ||
      this.nombreControl.hasError('required') ||
      this.nombreControl.hasError('pattern') ||
      this.passwordControl.value === '' ||
      this.confirmpasswordControl.value === ''
    ) {
      return false;
    } else {
      this.control = true;
      return true;
    }
  }

  validatePassword() {
    if (this.passwordControl.value === this.confirmpasswordControl.value) {
      return true;
    } else {
      return false;
    }
  }
}
