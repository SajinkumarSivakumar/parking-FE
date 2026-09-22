import {Component, OnInit} from '@angular/core';
import {MasterService} from "../../masters/master-service";
import {Shared} from "../../reuseable/shared/shared";

@Component({
  selector: 'app-dashboard-system',
    imports: [
        Shared
    ],
  templateUrl: './dashboard-system.html',
  styleUrl: './dashboard-system.css',
  standalone:true
})
export class DashboardSystem  implements OnInit {


  constructor(private ms:MasterService) {
  }

  ngOnInit() {
  }
}
