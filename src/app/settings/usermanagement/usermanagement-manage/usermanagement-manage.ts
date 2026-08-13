import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared } from "../../../reuseable/shared/shared";
import { SettingService } from "../../setting-service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usermanagement-manage',
  standalone: true,
  imports: [
    CommonModule,
    Shared
  ],
  templateUrl: './usermanagement-manage.html',
  styleUrl: './usermanagement-manage.css'
})
export class UsermanagementManage implements OnInit {

  users: any[] = [];

  currentPage = 1;
  pageSize = 10;

  constructor(private setting: SettingService,private route:Router,private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.setting.getUserManagementDetails().subscribe({

      next: (res: any) => {

        this.users = res.userDetails;
        this.cd.detectChanges();

        },

      error: () => {

        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Failed to retrieve data',
          showConfirmButton: false,
          timerProgressBar: true
        });

      }

    });

  }

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.users.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  navigateToAddPage(){
    this.route.navigateByUrl('/settings/userManagement')
  }

  editStatus(user:any){
    console.log('jjj',user)
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to change the status to Inactive?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, change it',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#22c55e',
      cancelButtonColor: '#ef4444'
    }).then((result) => {

      if (result.isConfirmed) {
         if(user.status =='Active'){
           this.setting.editStatus(user._id).subscribe((res:any)=>{

           })
         } else {
           this.setting.statusChangeInActive(user._id).subscribe((res:any)=>{

           })
         }

        this.setting.getUserManagementDetails().subscribe({
          next: (res: any) => {
            this.users = res.userDetails;
            this.cd.detectChanges();

          },
        });

      }

    });






  }

}