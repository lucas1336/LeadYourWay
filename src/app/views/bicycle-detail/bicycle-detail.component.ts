import { Component, Input } from '@angular/core';
import { BicycleModule } from 'src/app/models/bicycle.module';
import { BicycleService } from 'src/app/services/bicycle.service';
import { Router } from '@angular/router';
import { UserModule } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bicycle-detail',
  templateUrl: './bicycle-detail.component.html',
  styleUrls: ['./bicycle-detail.component.scss'],
})
export class BicycleDetailComponent {
  bicycleId: number | undefined;
  bicycle: BicycleModule | undefined;

  userId = '';

  toDate: string | null;
  fromDate: string | null;
  totalDays: number | undefined;
  totalCost = 0;

  constructor(
    private bicycleService: BicycleService,
    private router: Router,
    private userService: UserService
  ) {
    this.bicycleId = Number(localStorage.getItem('bicycleId'));
    this.toDate = localStorage.getItem('toDate');
    this.fromDate = localStorage.getItem('fromDate');
    this.getNumberOfDays();
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id') || '';
    this.getBicycle();
  }

  getBicycle(): void {
    if (this.bicycleId) {
      this.bicycleService.getItem(this.bicycleId).subscribe(
        (bicycle) => {
          this.bicycle = bicycle;
          this.getTotalCost();
        },
        (error) => {
          alert('Para reservar debes tener una cuenta\nSera redirigido a la pagina de registro');
          this.router.navigate(['/signup']);
        }
      );
    }
  }
  getStarGradient(rating: number): string {
    const percentage = (rating / 5) * 100;
    return `linear-gradient(to right, #ffcc00 0%, #ffcc00 ${percentage}%, #cccccc ${percentage}%, #cccccc 100%)`;
  }

  getStarPercentage(rating: number): number {
    return (rating / 5) * 100;
  }

  getNumberOfDays() {
    if (this.toDate && this.fromDate) {
      const date1 = new Date(this.toDate);
      const date2 = new Date(this.fromDate);
      const diffTime = Math.abs(date2.getTime() - date1.getTime());
      this.totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(this.totalDays);
    }
  }

  getTotalCost() {
    if (this.totalDays && this.bicycle) {
      this.totalCost = this.totalDays * this.bicycle.bicyclePrice;
    } else {
      this.totalCost = 0;
    }
    return this.totalCost;
  }

  onReserve() {
    this.userService.getItem(this.userId).subscribe((response: any) => {
      var userInfo = response.cards.length;
      if (userInfo > 0) {
        this.router.navigate(['/reservation']);
      } else {
        alert(
          'Para reservar debes agregar una tarjeta\nSera redirigido a su perfil para agregar una tarjeta'
        );
        this.router.navigate(['/profile']);
      }
    });
  }
}
