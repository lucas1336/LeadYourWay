import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LeadYourWay';

  dataSave() {
    sessionStorage.setItem('name', 'Oliver');
  }

  dataGet() {
    return sessionStorage.getItem('name');
  }

  dataRemove() {
    sessionStorage.removeItem('name');
  }
}
