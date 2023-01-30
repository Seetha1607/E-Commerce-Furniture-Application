import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userObject =new User()



  profileForm = this.fb.group({
    customerId: ['', [Validators.required]],
    customerName: ['', [Validators.required, Validators.minLength(4),Validators.pattern(/^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$/)]],
    email: ['', [Validators.required,Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(13),Validators.pattern('^[0-9]*$')]],
    password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(10), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/)]],
    confirmPassword: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(10), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/)]],
    



  }, { validators: [this.mustMatchValidator] });

  constructor(private fb: FormBuilder, private regServ:LoginService,private route:Router) {  }
  get customerId() { return this.profileForm.get("customerId") }
  get customerName() { return this.profileForm.get("customerName") }
  get email() { return this.profileForm.get("email") }
  get phoneNumber() { return this.profileForm.get("phoneNumber"); }
  get password() { return this.profileForm.get("password"); }
  get confirmPassword() { return this.profileForm.get("confirmPassword"); }



  ngOnInit(): void {
  }

  onSubmit(): void {
    this.regServ.storeData(this.userObject).subscribe({
      next(x:any)
      {alert("Registered Successfully")},
      error(errormsg:any){},
      complete(){alert("completed")}
    }),this.route.navigate(["/Login"])
  }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { mustMatch: false }
    }
    return null;
  }
}
