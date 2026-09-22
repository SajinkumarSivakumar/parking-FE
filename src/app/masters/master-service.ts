import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
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
  getBranchparticularInfo(id:any){
    return this.http.get(env.apiUrl +'master/getBranchparticularInfo',{
      params:{id:id}
    });
  }

  updateBranch(id: string, data: any) {
    return this.http.put(
        `${env.apiUrl}/master/branch/${id}`,
        data
    );
  }

//   sample api


   getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
   }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId=1');
  }

  gettodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=1');
  }
}
