import { Component, Input } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-bicycle-list',
  templateUrl: './bicycle-list.component.html',
  styleUrls: ['./bicycle-list.component.scss'],
})
export class BicycleListComponent {
  @Input() user!: UserModule;
  @Input() title!: String;
  @Input() bicycles!: any[];
}
