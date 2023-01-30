import { Component } from '@angular/core';
import { AddService } from '../Services/add.service';
import { CartService } from '../Services/cart.service';
import { LoginService } from '../Services/login.service';
import { Products } from '../Model/products';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  Furniture:Products[]=[]

  updateDetails:any = {
    furnitureCode:0,
    furnitureName:"",
    furnitureType:"",
    furnitureDescription:"",
    furniturePrice:""
  };

  constructor(private login:LoginService,private add:AddService,private cart:CartService){}
  ngOnInit(): void{
    this.login.fetchFurniture().subscribe(
      {next:furnitureData => {this.Furniture=furnitureData},
    error:e=>{alert("Failed to connect due to network error!")}}
    )
    this.cart.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtoCart(){
    window.alert("Added to Cart Successfully!!")
  }
 
  product = new Products();
  furnitureCode="";
  searchKey:string='';


  delete(furniture:any){
    this.add.deleteFurniture(furniture.furnitureCode).subscribe({next(x){alert("Furniture Deleted Successfully!"+x)},
    error(e){alert("error");console.log(e)},
   complete(){alert("Completed")}})}

   edit(furniture:any){
    this.updateDetails = furniture;
   }

  //  update(){
  //   this.add.saveFurniture(this.updateDetails).subscribe({next(x){alert("Furniture Updated Successfully!"+x)},
  //   error(e){alert("error");console.log(e)},
  //  complete(){alert("Completed")}})}

   onSubmit(): void {
    this.add.updateFurniture(this.product,this.furnitureCode).subscribe({
      next(x)
      {alert("Furniture Updated Successfully!")},
      error(errormsg){},
      complete(){alert("completed")}
    })
}

}
