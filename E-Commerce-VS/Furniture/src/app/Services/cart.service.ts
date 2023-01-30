import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem:any=[];
  cartList=new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.cartList.asObservable();
  }
  
  addToCart(product:any){
    this.cartItem.push(product);
    this.cartList.next(this.cartItem);
  }

  removeCartData(product:any){
    this.cartItem.map((product2:any,index:any)=>{
      if(product.id===product2.id){
        this.cartItem.splice(index,1)
      }
    })
  }
}
