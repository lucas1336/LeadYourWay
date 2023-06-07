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

  longText = `Bicicleta montañera de aro 27.5" de la marca Gotek, ideal para movilizarte a cualquier lugar que desees en tu día a día.`;
  longText2 = `Al aprovechar las ventajas de ajuste y conduccion para cada ciclista con su tamano de rueda ideal, y con una suspension optimizada gracias a nuestro Rx Tune especifico segun talla.`;
  longText3 = `Equipamos a la P.Series P.3 con los mejores componentes que pudimos encontrar, como una horquilla de suspensión Manitou Circus Sport con todos los adornos: resorte firme, amortiguación FFD y amortiguación de rebote TPC, para mantener tus despegues ajustados y tus aterrizajes más suaves.`;

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

  ngOnInit(): void {
    this.user = {
      firstName: 'Kirby',
      lastName: 'Henderson',
      email: 'kirby@mail.com',
      password: '123456',
      phone: '123456',
      birthDate: new Date(),
      bicycles: [
        {
          id: 1,
          model: 'Gotek',
          description: 'Bicicleta montañera de aro 27.5',
          image:
            'https://www.oxfordstore.pe/media/catalog/product/cache/e2b750e3a1f8d67cf5cdd4eb0e9445ad/b/f/bf2081_waikiki_20_grafito_2021_01.jpg',
          pricePerHour: 10,
          available: true,
          averageRating: 4,
          userId: 1,
        },
      ],
    };
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
