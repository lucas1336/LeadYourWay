import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    // Logic to toggle the side nav
  }
}
