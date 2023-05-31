import { Component, OnInit } from '@angular/core';
import { BicycleModule } from 'src/app/models/bicycle/bicycle.module';
import { BicycleService } from 'src/app/services/bicycle.service';
@Component({
  selector: 'app-card-bicyle',
  templateUrl: './card-bicyle.component.html',
  styleUrls: ['./card-bicyle.component.scss'],
})
export class CardBicyleComponent {
  bicycles: BicycleModule[] = [];

  constructor(private bicycleService: BicycleService) {}

  ngOnInit(): void {
    this.getBicycles();
  }

  getBicycles(): void {
    this.bicycleService.getBicycles().subscribe((bicycles) => {
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
}
