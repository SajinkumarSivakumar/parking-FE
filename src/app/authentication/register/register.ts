import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {AuthenticationService} from "../authentication-service";



@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone:true
})
export class Register implements OnInit {

  register:any;
  showPassword = false;
  showConfirmPassword = false;

  constructor(private fb:FormBuilder, private router:Router,private auth:AuthenticationService) {
  }
  ngOnInit() {

    this.register = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      email:['',Validators.required],
    })
  }

  SaveRegister(){

    if(this.register.invalid){
     this.register.markAsTouched();
      alert('Please fill all required fields');
     return
    }

    if(this.register.value.password !== this.register.value.confirmPassword){
      alert('Password and Confirm Password do not match');
      return;
    }

    const formValue = this.register.getRawValue();

      this.auth.saveRegister(formValue).subscribe((res:any)=>{

      })


  }
}
