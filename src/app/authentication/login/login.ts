import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../authentication-service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login  implements OnInit {

  login:any;
  showPassword = false;

  constructor(private route:Router,private auth:AuthenticationService,private fb:FormBuilder) {
  }
  ngOnInit() {
    this.login = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }


  submitLogin() {
    this.auth.saveLogin(this.login.value).subscribe({
      next: (res: any) => {


        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: false,
          showCloseButton: true,
          timer: 5000,
          timerProgressBar: true
        });
        this.route.navigateByUrl('settings/userManagement/manage')
      },
      error: (err) => {

        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Login Failed',
          showConfirmButton: false,
          showCloseButton: true,
          timer: 5000,
          timerProgressBar: true
        });

      }
    });
  }

  newRegister(){
    this.route.navigateByUrl('new/register')
  }
}
