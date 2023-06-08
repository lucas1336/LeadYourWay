import { Component } from '@angular/core';
import { BicycleService } from 'src/app/services/bicycle.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loggedIn: boolean = false;

  constructor(private bicycleService: BicycleService, private userService: UserService) {}

  ngOnInit() {
    this.userService.getItem(localStorage.getItem('id')).subscribe((user) => {
      this.loggedIn = true;
    });
  }
}
