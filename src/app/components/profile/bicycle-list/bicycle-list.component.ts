import { Component, Input, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';
import { BicycleModule } from 'src/app/models/bicycle-model.model';

@Component({
  selector: 'app-bicycle-list',
  templateUrl: './bicycle-list.component.html',
  styleUrls: ['./bicycle-list.component.scss'],
})
export class BicycleListComponent {
  @Input() user!: UserModule;
  @Input() title!: String;
  @Input() bicycles!: BicycleModule[];

  ngOnInit(): void {}
}
