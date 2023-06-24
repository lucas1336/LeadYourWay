import { Component, Input } from '@angular/core';
import { UserModule } from 'src/app/models/user.module';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent {
  @Input() user!: UserModule;
}
