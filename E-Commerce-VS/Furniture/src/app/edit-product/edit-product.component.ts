import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AddService } from '../Services/add.service';
import { Products } from '../Model/products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  // public updateForm!: FormGroup
  // constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router,private add:AddService){}
  // ngOnInit(): void {
  //   this.updateForm = this.formBuilder.group({
  //     furnitureCode:[''],
  //     furnitureName:[''],
  //     furnitureType:[''],
  //     furnitureDescription:[''],
  //     furniturePrice:[''],
  //     isFurnitureAvailable:['']
  //   })
  // }
  // product = new Products();
  // updateFurniture(){
  //   this.add.updateFurnitures1(this.product).subscribe({next(x){alert("Data Added"+x)},
  //   error(e){alert("error");console.log(e)},
  //  complete(){alert("Completed")}})}
  // }

  email?:string='';
  furnitureCode?:number=0;
    furnitureName?:string='';
    furnitureType?:string='';
    furnitureDescription?:string='';
    furniturePrice?:number=0;
    isFurnitureAvailable?:boolean=false

    productData1 = new Products();
  ngOnInit(): void {
  }
  constructor(private add:AddService){}

//   updateFurniture(){
//     this.add.updateFurnitures1(this.productData1).subscribe(respone =>{
//       console.log(respone);
//       this.add.getAllFurniture();
//     },error=>{
//       console.log(error);
//     })
// }
}

