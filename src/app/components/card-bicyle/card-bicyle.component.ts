import { Component, OnInit } from '@angular/core';
import { BicycleModule } from 'src/app/models/bicycle-model.model';
import { BicycleService } from 'src/app/services/bicycle.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-bicyle',
  templateUrl: './card-bicyle.component.html',
  styleUrls: ['./card-bicyle.component.scss'],
})
export class CardBicyleComponent {
  bicycles: BicycleModule[] = [];

  constructor(private bicycleService: BicycleService, private router: Router) {}

  ngOnInit(): void {
    this.getBicycles();
  }

  getBicycles(): void {
    this.bicycleService.getList().subscribe((bicycles) => {
      this.bicycles = bicycles;
    });
  }
  getStarGradient(rating: number): string {
    const percentage = (rating / 5) * 100;
    return `linear-gradient(to right, #ffcc00 0%, #ffcc00 ${percentage}%, #cccccc ${percentage}%, #cccccc 100%)`;
  }

  getStarPercentage(rating: number): number {
    return (rating / 5) * 100;
  }

  onReserve(id: number) {
    localStorage.setItem('bicycleId', String(this.bicycles[id - 1].id));
    this.router.navigate(['/bicycles']);
  }
}
