import { User } from 'src/app/models/profile-model';
import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user!: User;

  selectedDate!: Date;

  ngOnInit(): void {
    this.user = new User(
      'Kirby',
      'kirby.hi@poyo.com',
      'https://ipfs.creary.net/ipfs/QmayCWVoB27yxuN4aum762sfZVrX7XsSEY6wJ16na4QUWQ',
      'Cute guy',
      [
        {
          id: 1,
          name: 'Bicicleta fachera',
          description:
            'Bicicleta fachera de aro 27.5" de la marca Gotek, ideal para movilizarte a cualquier lugar que desees en tu día a día.',
          price: 100,
          image: 'https://www.eltiodelmazo.com/wp-content/uploads/2015/02/nuevas-bicicletas-1.jpg',
        },
        {
          id: 2,
          name: 'BMX',
          description:
            'Al aprovechar las ventajas de ajuste y conduccion para cada ciclista con su tamano de rueda ideal, y con una suspension optimizada gracias a nuestro Rx Tune especifico segun talla.',
          price: 200,
          image: 'https://www.eltiodelmazo.com/wp-content/uploads/2015/02/nuevas-bicicletas-1.jpg',
        },
      ],
      [
        {
          id: 1,
          name: 'Bicicleta no tan fachera',
          description:
            'Bicicleta fachera de aro 27.5" de la marca Gotek, ideal para movilizarte a cualquier lugar que desees en tu día a día.',
          price: 100,
          image: 'https://www.eltiodelmazo.com/wp-content/uploads/2015/02/nuevas-bicicletas-1.jpg',
        },
        {
          id: 2,
          name: 'Giant',
          description:
            'Al aprovechar las ventajas de ajuste y conduccion para cada ciclista con su tamano de rueda ideal, y con una suspension optimizada gracias a nuestro Rx Tune especifico segun talla.',
          price: 200,
          image: 'https://www.eltiodelmazo.com/wp-content/uploads/2015/02/nuevas-bicicletas-1.jpg',
        },
      ]
    );
  }
  longText = `Bicicleta montañera de aro 27.5" de la marca Gotek, ideal para movilizarte a cualquier lugar que desees en tu día a día.`;

  longText2 = `Al aprovechar las ventajas de ajuste y conduccion para cada ciclista con su tamano de rueda ideal, y con una suspension optimizada gracias a nuestro Rx Tune especifico segun talla.`;
  longText3 = `Equipamos a la P.Series P.3 con los mejores componentes que pudimos encontrar, como una horquilla de suspensión Manitou Circus Sport con todos los adornos: resorte firme, amortiguación FFD y amortiguación de rebote TPC, para mantener tus despegues ajustados y tus aterrizajes más suaves.`;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
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
