import {Component, HostListener, OnInit} from '@angular/core';
import {Shared} from "../../reuseable/shared/shared";
import {MasterService} from "../master-service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CanComponentDeactivate} from "../../reuseable/guard/guard";

@Component({
  selector: 'app-branch-managment',
  imports: [
    Shared,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './branch-managment.html',
  styleUrl: './branch-managment.css',
  standalone:true
})
export class BranchManagment implements OnInit,CanComponentDeactivate {

  branch:any;

  constructor(private master:MasterService,private fb:FormBuilder) {
  }

  ngOnInit() {
    this.branch = this.fb.group({
      branchName:['',Validators.required],
      branchCode:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
      contactNumber:['',Validators.required],
      emailAddress:['',Validators.required],
      status:['',Validators.required],
    })
  }

  canDeactivate(): boolean {
    if (!this.branch?.dirty) {
      return true;
    }

    return window.confirm(
        'You have unsaved changes. Are you sure you want to leave this page?'
    )
  }


@HostListener('window:beforeunload', ['$event'])

  beforeUnloadHandler(event:BeforeUnloadEvent){
  if (this.branch?.dirty) {
    event.preventDefault();
    event.returnValue = '';
  }
}

}
