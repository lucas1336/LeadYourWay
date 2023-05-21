import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Register } from 'src/app/models/register-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  RegisterData!:Register 
  constructor() {
    this.RegisterData = {} as Register
  }
  control!: boolean

  nombreControl = new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl: FormControl = new FormControl('', Validators.required);
  confirmpasswordControl: FormControl = new FormControl('', Validators.required);

  onSubmit() {
    
    if(this.validateStart())
    {
      this.RegisterData.nombre =this.nombreControl.value;
      this.RegisterData.email=this.emailFormControl.value;
      this.RegisterData.contraseña=this.passwordControl.value;
      console.log(this.RegisterData)
      this.control=true
    }
    else{
      console.log('Incomplete data')
      this.control=false
      
    }
  }

  validateStart()
  {
    if(this.emailFormControl.hasError('required') || this.emailFormControl.hasError('email') ||
    this.passwordControl.hasError('required')|| this.confirmpasswordControl.hasError('required') ||
    this.nombreControl.hasError('required')|| this.nombreControl.hasError('pattern') ||
    this.passwordControl.value === '' || this.confirmpasswordControl.value === '')
    {
      return false;
    }
    else{
      this.control=true
      return true;
      
    }
  }

  validatePassword()
  {
    if (this.passwordControl.value  === this.confirmpasswordControl.value )
    {
      return true
    }
    else
    {
      return false
    }

  }


}
