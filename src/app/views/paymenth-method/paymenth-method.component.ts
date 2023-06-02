import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentMethod } from 'src/app/models/payment-method.model';
import { PaymentMethodService } from 'src/app/services/payment-method.service';

@Component({
  selector: 'app-paymenth-method',
  templateUrl: './paymenth-method.component.html',
  styleUrls: ['./paymenth-method.component.scss'],
})
export class PaymenthMethodComponent {
  @ViewChild('PaymentForm', { static: false })
  PaymentForm!: NgForm;
  PaymentData!: PaymentMethod;

  nombre: string = '';
  numero_tarjeta: string = '';
  nombre_tarjeta: string = '';
  correo: string = '';
  año_exp: string = '';
  mes_exp: string = '';

  constructor(private paymentMethodService: PaymentMethodService) {
    this.PaymentData = {} as PaymentMethod;
  }

  onSubmit() {
    if (this.PaymentForm.form.valid) {
      this.addPayment();
      console.log('valid');
    } else {
      console.log('Invalid data');
    }
  }

  addPayment() {
    this.PaymentData.id = 0;
    console.log('PaymentData:', this.PaymentData);
    this.paymentMethodService.createItem(this.PaymentData).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
