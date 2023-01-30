import { Component } from '@angular/core';
import { Products } from '../Model/products';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent {
  Furniture:Products[]=[]

  constructor(private cartServ:CartService){}
ngOnInit(){
  this.cartServ.getProducts().subscribe(result=>{
    this.Furniture=result;

  })
}

removeProduct(furniture:any){
  this.cartServ.removeCartData(furniture);
}
 checkOut(){
  alert("Order is Confirmed!");
 }

}
