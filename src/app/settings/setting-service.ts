import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../../enviroment/enviromental";

@Injectable({
  providedIn: 'root',
})
export class SettingService {

  constructor(private http: HttpClient) {
  }


  saveUserForm(data:any): Observable<any> {
    return this.http.post(env.apiUrl +'settings/save/user', data);
  }

  getUserManagementDetails(){
    return this.http.get(env.apiUrl +'settings/getUserManagementDetails');
  }

  editStatus(id:any){
    return this.http.get(env.apiUrl +'settings/editStatus', {params:{id:id}});
  }

  statusChangeInActive(id:any){
    return this.http.get(env.apiUrl +'settings/statusChangeInActive', {params:{id:id}});
  }

  saveRolePermissions(data:any): Observable<any>{
    return this.http.post(env.apiUrl +'settings/saveRolePermissions', data);
  }

  getPermissionDetails(){
    return this.http.get(env.apiUrl +'settings/getPermissionDetails');
  }

  getEditPermissions(id:any){
    return this.http.get(env.apiUrl +'settings/getEditPermissions', {params:{id:id}});
  }

  updateRolePermissions(data: any): Observable<any> {
    return this.http.put(
        env.apiUrl + 'settings/updateRolePermissions',
        data
    );
  }


}
