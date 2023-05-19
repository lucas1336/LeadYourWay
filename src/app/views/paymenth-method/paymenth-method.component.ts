import { Component } from '@angular/core';

@Component({
  selector: 'app-paymenth-method',
  templateUrl: './paymenth-method.component.html',
  styleUrls: ['./paymenth-method.component.scss']
})
export class PaymenthMethodComponent {
  cardNumberInput: string = '';
  cardHolderInput: string = '';
  monthInput: string = '';
  yearInput: string = '';
  cvvInput: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  updateCardNumberBox(event:any): void {
    const cardNumberBox = document.querySelector('.card-number-box') as HTMLElement;
    if (cardNumberBox) {
      cardNumberBox.textContent = event.target.value;
    }
  }

  updateCardHolderName(event:any): void {
    const cardHolderName = document.querySelector('.card-holder-name') as HTMLElement;
    if (cardHolderName) {
      cardHolderName.textContent = event.target.value;
    }
  }

  updateExpMonth(event:any): void {
    const expMonth = document.querySelector('.exp-month') as HTMLElement;
    if (expMonth) {
      expMonth.textContent = event.target.value;
    }
  }

  updateExpYear(event:any): void {
    const expYear = document.querySelector('.exp-year') as HTMLElement;
    if (expYear) {
      expYear.textContent = event.target.value;
    }
  }

  flipCard(): void {
    const front = document.querySelector('.front') as HTMLElement;
    const back = document.querySelector('.back') as HTMLElement;

    if (front && back) {
      front.style.transform = 'perspective(1000px) rotateY(-180deg)';
      back.style.transform = 'perspective(1000px) rotateY(0deg)';
    }
  }

  unflipCard(): void {
    const front = document.querySelector('.front') as HTMLElement;
    const back = document.querySelector('.back') as HTMLElement;

    if (front && back) {
      front.style.transform = 'perspective(1000px) rotateY(0deg)';
      back.style.transform = 'perspective(1000px) rotateY(180deg)';
    }
  }

  updateCvvBox(event:any): void {
    const cvvBox = document.querySelector('.cvv-box') as HTMLElement;
    if (cvvBox) {
      cvvBox.textContent = event.target.value;
    }
  }
}
