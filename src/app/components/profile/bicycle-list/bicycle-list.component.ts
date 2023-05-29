import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/profile-model';

@Component({
  selector: 'app-bicycle-list',
  templateUrl: './bicycle-list.component.html',
  styleUrls: ['./bicycle-list.component.scss'],
})
export class BicycleListComponent {
  @Input() user!: User;
  @Input() title!: String;
  @Input() bicycles!: any[];
}
