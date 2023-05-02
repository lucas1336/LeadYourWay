import { Component, OnInit } from '@angular/core';
import { CardsBicycle } from 'src/app/models/cards-bicycle.model';
import { CardsBicycleService } from 'src/app/service/cards-bicycle.service';
@Component({
  selector: 'app-card-bicyle',
  templateUrl: './card-bicyle.component.html',
  styleUrls: ['./card-bicyle.component.scss']
})
export class CardBicyleComponent {
  bicycles: CardsBicycle[] = [];
  
  constructor(private cardsBicycleService: CardsBicycleService) { }

  ngOnInit(): void{
    this.getBicycles();
  }

  getBicycles(): void {
    this.cardsBicycleService.getBicycles().subscribe(bicycles => {
      this.bicycles = bicycles;
    });
  }
  getStarGradient(rating: number): string {
    const percentage = (rating / 5) * 100;
    return `linear-gradient(to right, #ffcc00 0%, #ffcc00 ${percentage}%, #cccccc ${percentage}%, #cccccc 100%)`;
  }
/*
  getStarWidth(rating: number): number {
    const maxRating = 5;
    const percentage = (rating / maxRating) * 100;
    return percentage;
  }
  getStarsArray(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i);
  }*/
  getStarPercentage(rating: number): number {
    return (rating / 5) * 100;
  } 
}
