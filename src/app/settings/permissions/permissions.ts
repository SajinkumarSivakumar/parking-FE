import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Shared} from "../../reuseable/shared/shared";
import {SettingService} from "../setting-service";
import {NgForOf, NgIf} from "@angular/common";
import {of, switchMap} from "rxjs";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-permissions',
  imports: [
    Shared,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule,


  ],
  templateUrl: './permissions.html',
  styleUrl: './permissions.css',
  standalone: true,
})
export class Permissions implements OnInit {

  userList:any[]=[];
  userListOg:any[]=[];
  showUserDropdown = false;
  roles:any;
  menuPermissions:any[]=[];
  updatepage:Boolean=false;
  id:any;

  constructor(private activated:ActivatedRoute,private fb:FormBuilder,private settings:SettingService,private cd:ChangeDetectorRef,private route:Router) {
  }
  ngOnInit() {

      this.roles = this.fb.group({
        userName:[''],
        role:[''],
        status:['']
      })


    this.settings.getUserManagementDetails().subscribe((user:any)=>{
     this.userList = user.userDetails;
     this.userListOg = [...this.userList];
     this.cd.detectChanges()
    })

    this.menuPermissions = [
      {
        menuId: 1,
        menuName: 'Dashboard',
        icon: '🏠',
        view: false,

      },

      {
        menuId: 2,
        menuName: 'Master',
        icon: '🏠',
        view: false,

      },
      {
        menuId: 3,
        menuName: 'Vehicle Entry',
        icon: '🚗',
        view: false,

      },
      {
        menuId: 4,
        menuName: 'Vehicle Exit',
        icon: '🚙',
        view: false,

      },
      {
        menuId: 5,
        menuName: 'Parking Slots',
        icon: '🅿️',
        view: false,

      },
      {
        menuId: 6,
        menuName: 'Customers',
        icon: '👤',
        view: false,

      },
      {
        menuId: 7,
        menuName: 'Payments',
        icon: '💳',
        view: false,

      },
      {
        menuId: 8,
        menuName: 'Reports',
        icon: '📊',
        view: false,

      },
      {
        menuId: 9,
        menuName: 'Settings',
        icon: '⚙️',
        view: false,

      }
    ];


    //   update process

    this.id = this.activated.snapshot.paramMap.get('id')
     this.updatepage = true;
    this.settings.getEditPermissions(this.id).subscribe((res:any)=>{
      console.log('resres',res)
      this.patchValue(res.userDetails)
    })

    this.searchFunc();

  }

  searchFunc(){
    this.roles.get('userName').valueChanges
        .pipe(switchMap((key: string) => {
              if (!key) {
                return of(this.userListOg);
              }
              const filter = this.userListOg.filter((item: any) => item.email?.toLowerCase().includes(key.toLowerCase()));
              return of(filter);
            })
        )
        .subscribe((user: any) => {
          this.userList = user;
        });
  }

  selectUser(user: any) {

    this.roles.patchValue({
      userName: user.email,
      role:user.role,
      status:user.status,
    });



    this.showUserDropdown = false;
  }

  toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
  }



  savepermissions() {

    const payload = {
      userName: this.roles.get('userName')?.value,
      role: this.roles.get('role')?.value,
      status: this.roles.get('status')?.value,
      permissions: this.menuPermissions
    };

    this.settings.saveRolePermissions(payload).subscribe({

      next: (res: any) => {

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Permissions saved successfully.',
          confirmButtonText: 'OK'
        });

      },

      error: (err: any) => {

        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to save permissions.',
          confirmButtonText: 'OK'
        });

      }

    });

  }

  goToManage(){
    this.route.navigateByUrl('/settings/permissions/manage')
  }

  updatepermissions() {

    const payload = {
      id: this.id,

      userName: this.roles.get('userName')?.value,
      role: this.roles.get('role')?.value,
      status: this.roles.get('status')?.value,

      permissions: this.menuPermissions
    };

    console.log('Update Payload:', payload);

    this.settings.updateRolePermissions(payload).subscribe({

      next: (res: any) => {

        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Permissions updated successfully.',
          confirmButtonText: 'OK'
        });

      },

      error: (err: any) => {

        console.error(err);

        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to update permissions.',
          confirmButtonText: 'OK'
        });

      }

    });
  }

  patchValue(data: any) {




    this.roles.patchValue({
      userName: data.permissions.userName,
      role: data.permissions.role,
      status: data.permissions.status
    });



    const meta = data.permissionsmeta;

    this.menuPermissions = this.menuPermissions.map((menu: any) => {

      switch (menu.menuId) {

        case 1:
          return {
            ...menu,
            view: meta.Dashboard
          };

        case 2:
          return {
            ...menu,
            view: meta.VehicleEntry
          };

        case 3:
          return {
            ...menu,
            view: meta.VehicleExit
          };

        case 4:
          return {
            ...menu,
            view: meta.ParkingSlots
          };

        case 5:
          return {
            ...menu,
            view: meta.Customers
          };

        case 6:
          return {
            ...menu,
            view: meta.Payments
          };

        case 7:
          return {
            ...menu,
            view: meta.Reports
          };

        case 8:
          return {
            ...menu,
            view: meta.Settings
          };

        default:
          return menu;
      }

    });


  }
}
