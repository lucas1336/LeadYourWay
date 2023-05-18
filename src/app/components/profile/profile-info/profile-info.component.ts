import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/profile-model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent {
  @Input() user!: User;
}
