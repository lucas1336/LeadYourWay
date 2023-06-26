import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModule } from 'src/app/models/user.module';

import * as _ from 'lodash';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
})
export class EditInfoComponent {
  UserData!: UserModule;
  UserInfoForm!: NgForm;
  dataSource = new MatTableDataSource();

  id!: string | null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.UserData = {} as UserModule;
  }

  ngOnInit() {
    this.id = localStorage.getItem('id');
    this.getUserInfoById(this.id);
  }

  updateOffer() {
    this.userService.updateItem(String(this.id), this.UserData).subscribe(
      (response: any) => {
        this.router.navigate(['/profile']);
      },
      (error: any) => {
        this.router.navigate(['/profile']);
      }
    );
  }

  cancelEdit() {
    this.UserInfoForm.resetForm();
  }

  getUserInfoById(id: string | null) {
    this.userService.getItem(id).subscribe((response: any) => {
      this.UserData.userFirstName = String(response.userFirstName);
      this.UserData.userLastName = String(response.userLastName);
      this.UserData.userEmail = String(response.userEmail);
      this.UserData.userPhone = String(response.userPhone);
      this.UserData.userBirthDate = String(response.userBirthDate);
      this.UserData.userPassword = String(response.userPassword);
      this.UserData.imageData = String(response.imageData);
    });
  }
}
