import {Component, HostListener, OnInit} from '@angular/core';
import {Shared} from "../../reuseable/shared/shared";
import {MasterService} from "../master-service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CanComponentDeactivate} from "../../reuseable/guard/guard";
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from "@angular/router";

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
  updatepage:Boolean=false;
  id:any;

  constructor(private ms:MasterService,private fb:FormBuilder,private route:Router,private activated:ActivatedRoute) {
  }

  ngOnInit() {
    this.branch = this.fb.group({
      branchName:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
      contactNumber:['',Validators.required],
      emailAddress:['',Validators.required],
      status:['',Validators.required],
    });
    this.id = this.activated.snapshot.paramMap.get('id')
     if(this.id){
       this.updatepage = true;
       this.ms.getBranchparticularInfo(this.id).subscribe((res:any)=>{
         this.patchValue(res.branchDetails)

       })
     }

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
  saveBranch() {

    if (this.branch.invalid) {

      this.branch.markAllAsTouched();

      Swal.fire({
        icon: 'warning',
        title: 'Required Fields',
        text: 'Please fill all required fields.',
        confirmButtonText: 'OK'
      });

      return;
    }

    const formValue = this.branch.getRawValue();

    this.ms.saveBranch(formValue).subscribe({

      next: (res: any) => {

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Branch saved successfully.',
          confirmButtonText: 'OK'
        }).then(() => {


          this.branch.markAsPristine();



        });

      },

      error: (err: any) => {

        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: err?.error?.message || 'Something went wrong while saving the branch.',
          confirmButtonText: 'OK'
        });

      }

    });

  }

  navigateToManagePage(){
    this.route.navigateByUrl('/master/branch/manage')
  }

  updateBranch() {

    if (this.branch.invalid) {

      this.branch.markAllAsTouched();

      Swal.fire({
        icon: 'warning',
        title: 'Required Fields',
        text: 'Please fill all required fields.',
        confirmButtonText: 'OK'
      });

      return;
    }

    const formValue = this.branch.getRawValue();

    this.ms.updateBranch(this.id, formValue).subscribe({

      next: (res: any) => {

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Branch updated successfully.',
          confirmButtonText: 'OK'
        }).then(() => {


          this.branch.markAsPristine();

          this.route.navigateByUrl('/master/branch/manage');

        });

      },

      error: (err: any) => {

        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: err?.error?.message ||
              'Something went wrong while updating the branch.',
          confirmButtonText: 'OK'
        });

      }

    });
  }

  patchValue(data:any){
    this.branch.patchValue(data.branchInfo)
  }

}
