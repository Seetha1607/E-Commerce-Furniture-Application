import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { LoginService } from '../Services/login.service';
import { Products } from '../Model/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Furniture:Products[]=[]
  searchKey:string='';

  constructor(private login:LoginService,private router:Router,private cart:CartService){}
  ngOnInit(): void{
    this.login.fetchFurniture().subscribe(
      {next:furnitureData => {this.Furniture=furnitureData},
    error:e=>{alert("Failed to connect due to network error!")}}
    )
    this.cart.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
     
  }
  addtoCartReDirect(){
    window.alert("To add Products in your cart, please Register!")
    this.router.navigate(["/Register"])
  }

}
