import {Component, OnInit} from '@angular/core';
import {Shared} from "../../reuseable/shared/shared";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {SettingService} from "../setting-service";

@Component({
  selector: 'app-usermanagement',
  imports: [
    Shared,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './usermanagement.html',
  styleUrl: './usermanagement.css',
  standalone:true
})
export class Usermanagement implements OnInit {

  userManagement:any
  selectedFile!: File;
  id:any;
  imageUrl: string = '';
   roleInfo:any;

  constructor(private fb:FormBuilder,private route:Router,private setting:SettingService,private activated:ActivatedRoute) {
  }

  ngOnInit() {
    this.userManagement=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mobile:['',Validators.required],
      email:['',Validators.required],
      dob:[''],
      gender:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      branch:['',Validators.required],
      department:[''],
      role:['',Validators.required],
      joiningDate:[''],
      status:[''],
    })

  }


  onFileSelected(event:any){

    this.selectedFile = event.target.files[0];

    if(this.selectedFile){
      alert('File Upload SuccessFully')
    }


  }

  saveUser() {

    if (this.userManagement.invalid) {
      this.userManagement.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    Object.keys(this.userManagement.value).forEach(key => {
      formData.append(key, this.userManagement.value[key]);
    });

    formData.append('photo', this.selectedFile);

    this.setting.saveUserForm(formData).subscribe(res => {

      alert('UserManagement Save Successfully')
    });
  }

  goToManage(){
    this.route.navigateByUrl('settings/userManagement/manage')
  }



}
