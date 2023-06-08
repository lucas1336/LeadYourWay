import { Component } from '@angular/core';
import { BicycleService } from 'src/app/services/bicycle.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loggedIn: boolean = false;

  constructor(private bicycleService: BicycleService) {}

  ngOnInit() {
    this.bicycleService.getItem(Number(localStorage.getItem('id'))).subscribe((data) => {
      if (data) {
        this.loggedIn = true;
      }
    });
  }
}
