import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { LoginService } from '../Services/login.service';
import { Products } from '../Model/products';
import { User } from '../Model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Furniture:Products[]=[]
  searchKey:string='';

  constructor(private login:LoginService,private cart:CartService){}
  ngOnInit(): void{
    this.login.fetchFurniture().subscribe(
      {next:furnitureData => {this.Furniture=furnitureData},
    error:e=>{alert("Failed to connect due to network error!")}}
    )
    this.cart.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }


  addToCart(Furniture:any){
    this.cart.addToCart(Furniture);
    alert("Added to cart!")
  }

}
