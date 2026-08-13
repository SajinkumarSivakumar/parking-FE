import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment as env} from "../../../enviroment/enviromental";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}


  saveRegister(data:any):Observable<any> {
    return this.http.post(env.apiUrl +'auth/save/register', data);
  }

  saveLogin(data:any):Observable<any> {
    return this.http.post(env.apiUrl +'auth/save/login', data);
  }
}