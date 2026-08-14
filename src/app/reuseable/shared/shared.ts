import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-shared',
  imports: [CommonModule],
  templateUrl: './shared.html',
  styleUrl: './shared.css',
  standalone:true
})
export class Shared implements OnInit{

  isSidebarOpen: boolean = false;
  cartLength:any;
  isProfileOpen: boolean = false;
  userEmail: string | null = '';

  isSettingsOpen = false;
  isMastersOpen = false;

  constructor(private route: Router,private cd:ChangeDetectorRef) {
  }
  ngOnInit() {


  }

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onSearch(event: any) {

  }

  logout() {

    localStorage.clear();

    this.route.navigateByUrl('');

  }

  toggleSettings(){
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  navigateToUserManagement(){
    this.route.navigateByUrl('/settings/userManagement/manage')
  }
  navigateToPermissions(){
    this.route.navigateByUrl('/settings/permissions/manage')
  }


//   master

  toggleMasters(){
    this.isMastersOpen = !this.isMastersOpen;
  }

  navigateToBranchManagement(){
    this.route.navigateByUrl('/master/branch/manage')
  }
  navigateToParkingConfigurations(){
    this.route.navigateByUrl('/master/parkingConfiguration')
  }
}
