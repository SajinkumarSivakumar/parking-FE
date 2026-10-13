import {Component, OnInit} from '@angular/core';
import {Shared} from "../../../reuseable/shared/shared";
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MasterService} from "../../master-service";
import {ActivatedRoute, Router} from "@angular/router";
import {debounceTime, of, switchMap} from "rxjs";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-parking-configurations',
  imports: [
    Shared,
    ReactiveFormsModule,
    NgIf,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatCardModule,
    NgForOf,

  ],
  templateUrl: './parking-configurations.html',
  styleUrl: './parking-configurations.css',
  standalone:true
})
export class ParkingConfigurations implements OnInit{

  parking:any;
  updatePage:boolean=false;
  branchList:any=[];
  branchListOg:any=[];


  constructor(private fb:FormBuilder,private ms:MasterService,private route:Router,private activated:ActivatedRoute) {
  }

  ngOnInit() {
    this.parking = this.fb.group({
      branch:['',Validators.required],
      parkingName:['',Validators.required],
      parkingType:['',Validators.required],
      totalFloors:['',Validators.required],
      totalCapacity:['',Validators.required],
      status:[''],
      city:[''],
      address:['']

    });

    this.apiCallFunc();
  }


  apiCallFunc(){

    this.ms.getAllBranchDetails().subscribe((res:any) =>{
      if(res.status){
        this.branchList = res.branchDetails;
        this.branchListOg = [...this.branchList];
      }
    });

    this.parking.get('branch').valueChanges.pipe(debounceTime(100),switchMap((key:string)=>{
       if(!key){

         return of(this.branchListOg)
       }

      const filter = this.branchListOg.filter((item: any) =>
          item.branchName
              .toLowerCase()
              .includes(key.trim().toLowerCase())
      );
       return of(filter);
    })).subscribe((res:any[])=>{
      this.branchList = res
    });





  }
  onBranchSelected(event: any) {
    const selectedBranchName = event.option.value;

    const selectedBranch = this.branchListOg.find(
        (item: any) => item.branchName === selectedBranchName
    );


    this.parking.get('address').setValue(selectedBranch.address);
    this.parking.get('city').setValue(selectedBranch.city);

  }



  save(){

    if(this.parking.invalid){
      this.parking.markAsTouched();

      return;
    }


    const formValue = this.parking.getRawValue();

     this.ms.saveParkingConfiguration(formValue).subscribe((res:any)=>{

     })

  }

  protected readonly parent = parent;
}
