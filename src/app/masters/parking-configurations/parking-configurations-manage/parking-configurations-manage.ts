import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MasterService} from "../../master-service";
import {Router} from "@angular/router";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {Shared} from "../../../reuseable/shared/shared";

@Component({
  selector: 'app-parking-configurations-manage',
  imports: [
    NgForOf,
    NgIf,
    Shared,
    UpperCasePipe
  ],
  templateUrl: './parking-configurations-manage.html',
  styleUrl: './parking-configurations-manage.css',
  standalone:true
})
export class ParkingConfigurationsManage implements OnInit{

  currentPage = 1;
  pageSize = 10;
  parkingDetails:any[]=[]

  constructor(private ms:MasterService,private route:Router,private cd:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.ms.getAllParkingConfigDetails().subscribe((res:any)=>{
      this.parkingDetails = res.branchDetails
      this.cd.detectChanges()

    })
  }


  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.parkingDetails.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.parkingDetails.length / this.pageSize);
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
    this.route.navigateByUrl('/master/parkingConfiguration')
  }

  editBranch(user:any){
    this.route.navigateByUrl('/master/parkingConfiguration/' + user._id)
  }

  protected readonly UpperCasePipe = UpperCasePipe;
}
