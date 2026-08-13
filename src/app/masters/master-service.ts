import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../../enviroment/enviromental";

@Injectable({
  providedIn: 'root',
})
export class MasterService {

  constructor(private http: HttpClient) {
  }

  saveBranch(data:any): Observable<any>{
    return this.http.post(env.apiUrl +'master/save/branch', data);
  }

  getAllBranchDetails(){
    return this.http.get(env.apiUrl +'master/getAllBranchDetails');
  }
}
