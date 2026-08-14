import {Component, OnInit} from '@angular/core';
import {Shared} from "../../../reuseable/shared/shared";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-parking-configurations',
  imports: [
    Shared,

  ],
  templateUrl: './parking-configurations.html',
  styleUrl: './parking-configurations.css',
  standalone:true
})
export class ParkingConfigurations implements OnInit{

  constructor() {
  }

  ngOnInit() {
  }
}
