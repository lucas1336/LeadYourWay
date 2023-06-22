import { Component, Input, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';
import { BicycleModule } from 'src/app/models/bicycle-model.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bicycle-list',
  templateUrl: './bicycle-list.component.html',
  styleUrls: ['./bicycle-list.component.scss'],
})
export class BicycleListComponent {
  @Input() user!: UserModule;
  @Input() title!: String;
  @Input() bicycles!: BicycleModule[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCreate() {
    this.router.navigate(['/create']);
  }
}
