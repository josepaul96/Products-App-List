import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  registerUser(userData){
    this.http.post<any>("http://localhost:4000/userAPI/register",{userData}).subscribe((data)=>console.log(data))
  }

  loginUser(userData){
  
    return this.http.post<any>("http://localhost:4000/userAPI/login",{userData})

  }
}