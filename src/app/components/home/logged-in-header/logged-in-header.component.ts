import { Component } from '@angular/core';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.scss'],
})
export class LoggedInHeaderComponent {
  isMenuCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    // Logic to toggle the side nav
  }
}
