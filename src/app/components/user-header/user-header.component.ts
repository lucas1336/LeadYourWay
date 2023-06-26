import { Component } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent {
  isMenuCollapsed = true;
  userLoggedIn = false;

  constructor() {
    localStorage.getItem('id') ? (this.userLoggedIn = true) : false;
    console.log(this.userLoggedIn);
  }

  ngOnInit(): void {}

  toggleSidenav(): void {
    // Logic to toggle the side nav
  }
}
