import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table'
import { NgForm } from '@angular/forms';
import { UserInfoService } from 'src/app/services/user.service';
import { UserInfo } from 'src/app/models/user/userinformation.module';

import * as _ from 'lodash';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent {
  UserInfoData!:UserInfo;
  UserInfoForm!:NgForm;
  dataSource = new MatTableDataSource();
  
  id!:string|null;

  constructor(private userInfoService:UserInfoService,private route: ActivatedRoute) {
    this.UserInfoData = {} as UserInfo
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id); // Imprime el valor del id en la consola
    this.getUserInfoById(this.id)
  }
  updateOffer()
  {
    if(this.UserInfoData.id !== null)
    {
      this.userInfoService.updateItem(this.UserInfoData.id.toString(),this.UserInfoData).subscribe((response:any)=>{
        this.dataSource.data = this.dataSource.data.map((o:any) =>{
          if(o.id == response.id){
            o = response;
          }
          return 0;
        });
      });
    }
  }
  cancelEdit(){
    
    this.UserInfoForm.resetForm();
  }

  getUserInfoById(id:string|null)
  {
    this.userInfoService.getItem(id).subscribe((response:any)=>
    {
      this.UserInfoData=response
      
    })
    
    console.log(this.UserInfoData)
  }
}
