import { Component, OnInit } from '@angular/core';
import {UserserviceService } from '../userservice.service'
import { Router } from '@angular/router';
import {UserModel} from "./userModel"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerUserData = new UserModel(null,null);
   emailError:String="";
   passwordError:String="";
  constructor( private userService:UserserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.userService.registerUser(this.registerUserData);
    setTimeout (() => {
      console.log("Hello from setTimeout");
      this.router.navigate(["/login"])
   }, 300);
  }

  validate(){
    var haslowercase = (this.registerUserData.password.match(/[a-z]/));
    var hasuppercase = (this.registerUserData.password.match(/[A-Z]/));
    var hasnumber = (this.registerUserData.password.match(/\d/));

    var isEmail=1;
    var isPassword=1;

    var RegEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w{2,3})*(\.\w{2,3})+$/
    if(!this.registerUserData.email.match(RegEmail)){
      this.emailError="Invalid Email"; 
      isEmail=0;
    }

    if(!(haslowercase&&hasuppercase&&hasnumber)){
      this.passwordError="Password must contain one uppercase,lowercase and digit";
      isPassword=0;
    }

    if((isPassword&&isEmail)){
      this.registerUser();
    }




  }

}
