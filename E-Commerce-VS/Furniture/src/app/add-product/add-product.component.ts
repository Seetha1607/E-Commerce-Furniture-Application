import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AddService } from '../Services/add.service';
import { Products } from '../Model/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  email?:string='';
  furnitureCode?:number=0;
    furnitureName?:string='';
    furnitureType?:string='';
    furnitureDescription?:string='';
    furniturePrice?:number=0;
    isFurnitureAvailable?:boolean=false

    productData = new Products();
  ngOnInit(): void {
  }
  constructor(private add:AddService){}

  save(){
    this.add.saveFurniture(this.productData).subscribe({next(x){alert("DataAdded")},
  // error(errormsg){alert("error"+errormsg);},
  complete(){alert("completed")}
})}   
}

