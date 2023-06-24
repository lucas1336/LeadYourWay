import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BicycleModule } from 'src/app/models/bicycle.module';

@Component({
  selector: 'app-card-bicyle',
  templateUrl: './card-bicyle.component.html',
  styleUrls: ['./card-bicyle.component.scss'],
})
export class CardBicyleComponent {
  @Input() bicycle!: BicycleModule;
  constructor(private router: Router) {}

  onReserve(id: number) {
    if (!localStorage.getItem('id')) {
      alert('Porfavor inicie sesión o registrese para poder reservar');
      this.router.navigate(['/signup']);
      return;
    }
    localStorage.setItem('bicycleId', String(this.bicycle.id));
    this.router.navigate(['/bicycles']);
  }
}
