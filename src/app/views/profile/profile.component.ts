import { Component } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user!: UserModule;
  UserData!: UserModule;
  selectedDate!: Date;
  dataSource = new MatTableDataSource();

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(private userService: UserService, private rout: Router, calendar: NgbCalendar) {
    this.UserData = {} as UserModule;

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  userId = localStorage.getItem('id');

  getUser() {
    this.userService.getItem(this.userId).subscribe((response: any) => {
      this.user = response;
    });
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    if (this.userId != null) {
      this.getUser();
    }
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('bicycleId');
    localStorage.removeItem('toDate');
    localStorage.removeItem('fromDate');
    localStorage.removeItem('token');
    this.rout.navigate(['/home']);
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

  formatNumber() {
    var userNumber = this.user.userPhone;
    var formattedNumber = userNumber.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
    return formattedNumber;
  }
}
