import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Shared} from "../../../reuseable/shared/shared";
import {SettingService} from "../../setting-service";
import {Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-permissions-manage',
  imports: [
    Shared,
    NgForOf,
    NgIf
  ],
  templateUrl: './permissions-manage.html',
  styleUrl: './permissions-manage.css',
  standalone:true
})
export class PermissionsManage implements OnInit{

  currentPage = 1;
  pageSize = 10;
  users: any[] = [];

  constructor(private settings:SettingService,private route:Router,private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.settings.getPermissionDetails().subscribe((res:any)=>{
      this.users = res.userDetails;
      this.cd.detectChanges();
    })

  }

  navigateToAddPage(){
    this.route.navigateByUrl('/settings/permissions')
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

  editStatus(user:any){
    this.route.navigateByUrl('/settings/permissions/' + user._id)


  }

}
