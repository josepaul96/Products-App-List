import { Component, OnInit } from '@angular/core';
import {UserserviceService } from '../userservice.service'
import { Router } from '@angular/router';
import {UserModel} from "../register/userModel"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:String="";
  isError:Number=0;
  constructor(private userService:UserserviceService, private router:Router) { }
  userData= new UserModel(null,null)
  ngOnInit():void  {
  }

  loginUser(){
    
     this.userService.loginUser(this.userData).subscribe((res)=>{ 
       if(res){
        setTimeout (() => {
          console.log("Hello from setTimeout");
          this.router.navigate(["/"])
       }, 300);
       this.isError=1;
       }
     })
     if (this.isError===0){
       this.error="Invalid Credentials"
     }
  }

}
