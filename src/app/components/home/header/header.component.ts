import { Component, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    // Logic to toggle the side nav
  }
}
