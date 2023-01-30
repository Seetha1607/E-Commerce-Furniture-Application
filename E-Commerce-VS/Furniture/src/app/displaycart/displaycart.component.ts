import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-displaycart',
  templateUrl: './displaycart.component.html',
  styleUrls: ['./displaycart.component.css']
})
export class DisplaycartComponent {
  constructor(private cartServ:CartService){

  }
 
  orderCounts:number=0;
  
  ngOnInit(){
    this.cartServ.getProducts().subscribe(res=>
      this.orderCounts=res.length)
  }
}

