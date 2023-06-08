import { Component, ViewChild,  SimpleChanges, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentMethod } from 'src/app/models/payment-method/payment-method.model';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-paymenth-method',
  templateUrl: './paymenth-method.component.html',
  styleUrls: ['./paymenth-method.component.scss']
})
export class PaymenthMethodComponent {
  @ViewChild('PaymentForm', { static: false })
  PaymentForm!: NgForm;
  PaymentData!: PaymentMethod;

  year: string;
  month: string;

  constructor(private paymentMethodService: PaymentMethodService, private snackBar: MatSnackBar) {
    this.PaymentData = {} as PaymentMethod;
    this.year = "";
    this.month = "";
  }
  

  onSubmit() {
    if (this.PaymentForm.invalid) {
      this.openSnackBar('Invalid data');
      return;
    }
  
    if (!this.isValidCardNumber(this.PaymentData.cardNumber)) {
      this.openSnackBar('Invalid data');
      return;
    }
  
    if (!this.isValidCVV(this.PaymentData.cardCVV)) {
      this.openSnackBar('Invalid data');
      return;
    }
  
    if (!this.isValidExpirationMonth(this.month)) {
      this.openSnackBar('Invalid data');
      return;
    }
  
    if (!this.isValidExpirationYear(this.year)) {
      this.openSnackBar('Invalid data');
      return;
    }
  
    // Perform the payment submission
    this.addPayment();
    console.log('Valid');
  }
  
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
  
  
  // Validation methods for specific fields
  
  isValidEmail(email: string) {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  isValidCardNumber(cardNumber: string) {
    // Card number validation: Check if the card number is numeric and has a valid length
    const cardNumberPattern = /^\d{16}$/;
    return cardNumberPattern.test(cardNumber);
  }
  
  isValidCVV(cvv: string) {
    // CVV validation: Check if the CVV is numeric and has a valid length
    const cvvPattern = /^\d{3,4}$/;
    return cvvPattern.test(cvv);
  }
  
  isValidExpirationMonth(month: string) {
    // Expiration month validation: Check if the month is numeric and between 1 and 12
    const monthPattern = /^(0?[1-9]|1[0-2])$/;
    return monthPattern.test(month);
  }
  
  isValidExpirationYear(year: string) {
    // Expiration year validation: Check if the year is numeric and has a valid length
    const yearPattern = /^\d{4}$/;
    return yearPattern.test(year);
  }
  

  addPayment() {
    this.PaymentData.id = 0;
    this.updateCardExpirationDate();
    this.PaymentData.cardType = this.PaymentData.cardType; // Guardar el valor seleccionado
    console.log('PaymentData:', this.PaymentData);
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

  updateCardExpirationDate() {
    this.PaymentData.cardExpirationDate = `${this.year}-${this.month}-06`;
  }

}
