import { Component, Input } from '@angular/core';
import { BicycleModule } from 'src/app/models/bicycle/bicycle.module';
import { ActivatedRoute } from '@angular/router';
import { BicycleService } from 'src/app/services/bicycle.service';
import { NgbDate, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bicycle-detail',
  templateUrl: './bicycle-detail.component.html',
  styleUrls: ['./bicycle-detail.component.scss'],
})
export class BicycleDetailComponent {
  bicycleId: number | undefined;
  bicycle: BicycleModule | undefined;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(
    private route: ActivatedRoute,
    private bicycleService: BicycleService,
    calendar: NgbCalendar
  ) {
    this.route.params.subscribe((params) => {
      this.bicycleId = params['id'];
    });
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 3);
  }

  ngOnInit(): void {
    this.getBicycle();
  }

  getBicycle(): void {
    if (this.bicycleId) {
      this.bicycleService.getBicycle(this.bicycleId).subscribe((bicycle) => {
        this.bicycle = bicycle;
      });
    }
  }
  getStarGradient(rating: number): string {
    const percentage = (rating / 5) * 100;
    return `linear-gradient(to right, #ffcc00 0%, #ffcc00 ${percentage}%, #cccccc ${percentage}%, #cccccc 100%)`;
  }

  getStarPercentage(rating: number): number {
    return (rating / 5) * 100;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
}
