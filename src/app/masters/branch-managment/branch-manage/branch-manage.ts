import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Shared} from "../../../reuseable/shared/shared";
import {NgForOf, NgIf} from "@angular/common";
import {MasterService} from "../../master-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-branch-manage',
  imports: [
    Shared,
    NgForOf,
    NgIf
  ],
  templateUrl: './branch-manage.html',
  styleUrl: './branch-manage.css',
  standalone:true
})
export class BranchManage implements OnInit{

  currentPage = 1;
  pageSize = 10;
  branchDetails:any[]=[]

  constructor(private ms:MasterService,private route:Router,private cd:ChangeDetectorRef) {
  }

  ngOnInit() {

    this.ms.getAllBranchDetails().subscribe((res:any)=>{
      this.branchDetails = res.branchDetails
      this.cd.detectChanges()

    })
  }

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.branchDetails.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.branchDetails.length / this.pageSize);
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
    this.route.navigateByUrl('/master/branchManagement')
  }

  editBranch(user:any){
    this.route.navigateByUrl('/master/branchManagement/' + user._id)
  }
}
