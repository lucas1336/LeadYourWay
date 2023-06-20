import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BicycleModule } from 'src/app/models/bicycle-model.model';

@Component({
  selector: 'app-card-bicyle',
  templateUrl: './card-bicyle.component.html',
  styleUrls: ['./card-bicyle.component.scss'],
})
export class CardBicyleComponent {
  @Input() bicycle!: BicycleModule;
  constructor(private router: Router) {}

  onReserve(id: number) {
    localStorage.setItem('bicycleId', String(this.bicycle.id));
    this.router.navigate(['/bicycles']);
  }
}
