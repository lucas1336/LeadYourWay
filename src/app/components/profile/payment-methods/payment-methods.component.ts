import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/profile-model';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent {
  @Input() user!: User;
}
