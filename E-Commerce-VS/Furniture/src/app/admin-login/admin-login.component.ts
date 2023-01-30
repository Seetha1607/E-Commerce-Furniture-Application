import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  email:string=""
  password:string=""
  
  userData : User={};


  constructor(private login:LoginService,private route:Router ) { }
  loginFun() {
    if (this.email === "seetha123@gmail.com" && this.password === "Seetha@123") {
      this.login.isLoginSuccess = true;
      alert("Welcome Admin.Your login is Successful!");
      this.route.navigate(['/Admin'])

    }
    else {
      this.login.isLoginSuccess = false;
    }
  }

}
