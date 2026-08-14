import {Component, OnInit} from '@angular/core';
import {Shared} from "../../../reuseable/shared/shared";
import {NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MasterService} from "../../master-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-parking-configurations',
  imports: [
    Shared,
    ReactiveFormsModule,

  ],
  templateUrl: './parking-configurations.html',
  styleUrl: './parking-configurations.css',
  standalone:true
})
export class ParkingConfigurations implements OnInit{

  parking:any;

  constructor(private fb:FormBuilder,private ms:MasterService,private route:Router,private activated:ActivatedRoute) {
  }

  ngOnInit() {
    this.parking = this.fb.group({
      branch:[''],
      parkingName:[''],
      parkingType:[''],
      totalFloors:[''],
      totalCapacity:[''],
      status:[''],
      slotPrefix:[''],
      city:[''],
      address:['']

    })
  }
}
