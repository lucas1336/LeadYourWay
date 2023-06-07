import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    console.log(this.user);
    console.log(this.bicycles);
    for (let i = 0; i < this.bicycles.length; i++) {
      console.log(this.bicycles[i].id);
    }
  }
}
