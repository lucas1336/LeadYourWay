import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { BicycleModule } from 'src/app/models/bicycle-model.model';
import { BicycleService } from 'src/app/services/bicycle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bicycle',
  templateUrl: './search-bicycle.component.html',
  styleUrls: ['./search-bicycle.component.scss'],
})
export class SearchBicycleComponent {
  model!: NgbDateStruct; // Add the model property here

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  bicycles: BicycleModule[] = [];

  ngOnInit(): void {
    this.getAllBicycles();
  }

  getBicycles(): void {
    if (this.fromDate && this.toDate) {
      this.getBicyclesByDateRange();
    } else {
      this.getAllBicycles();
    }
  }

  getBicyclesByDateRange(): void {
    if (this.fromDate && this.toDate) {
      const fromDate: string = `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`;
      const toDate: string = `${this.toDate.year}-${this.toDate.month}-${this.toDate.day}`;
      this.bicycleService.getBicyclesByDateRange(fromDate, toDate).subscribe((bicycles) => {
        this.bicycles = bicycles;
      });
    }
  }

  getAllBicycles(): void {
    this.bicycleService.getList().subscribe((bicycles) => {
      this.bicycles = bicycles;
    });
  }

  constructor(
    calendar: NgbCalendar,
    private bicycleService: BicycleService,
    private router: Router
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 3);
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
    this.getBicyclesByDateRange();
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

  search() {
    this.getBicycles();
  }
}
