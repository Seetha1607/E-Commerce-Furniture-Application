import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
  }
  

  user =new User()

  profileForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })



  constructor(private login:LoginService,private route:Router, private fb:FormBuilder ) { }
  get email() { return this.profileForm.get("email") }
  get password() { return this.profileForm.get("password"); }

  onSubmit(){
    this.login.loginFunction(this.user).subscribe(
      data => 
      {
        console.log("response received")
        alert("Login Successful!");
        this.route.navigate(["/Dashboard"])
    },
      error => {
        window.alert("Login Failed! Please Enter the correct Credentials!")
        console.log("exception occured")
      }
    )
  }
  
}
