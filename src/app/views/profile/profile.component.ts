import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { UserModule } from 'src/app/models/user/user.module';
import { UserInfo } from 'src/app/models/user/userinformation.module';
import { UserInfoService } from 'src/app/services/user.service';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user!: UserModule;
  UserData!: UserModule;
  UserInfoData!: UserInfo;
  selectedDate!: Date;
  dataSource = new MatTableDataSource();

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(
    private userService: UserService,
    private userInfoService: UserInfoService,
    calendar: NgbCalendar
  ) {
    this.UserData = {} as UserModule;
    this.UserInfoData = {} as UserInfo;

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  userId = localStorage.getItem('id');

  getUser() {
    this.userService.getItem(this.userId).subscribe((response: any) => {
      //console.log(response.data);
      this.user = response;
      console.log(this.user);
    });
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    if (this.userId != null) {
      this.getUser();
      console.log(this.userId);
    }
  }
  getUserInfoById(id: string | null) {
    this.userInfoService.getItem(id).subscribe((response: any) => {
      this.UserInfoData = response;
      console.log(this.UserInfoData);
    });
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
