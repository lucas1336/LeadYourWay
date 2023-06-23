import { Component, Input } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';
import { CardModule } from 'src/app/models/card.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent {
  @Input() user!: UserModule;
  @Input() selectedCard!: CardModule;
  balance!: number;
  constructor(private router: Router) {}
  onSubmit(){
    this.router.navigate(['/payment-method']);
  }
}
