import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Model/products';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  URL="http://localhost:8080/api/v1";
   


  constructor(private httpClient:HttpClient) { 
  }
 getAllFurniture():Observable<Array<Products>>{
  return this.httpClient.get<Array<Products>>("http://localhost:8080/api/v1/fetchAll");
 }

  saveFurniture(data1:Products) {
    return this.httpClient.post("http://localhost:8080/api/v1/saveFurniture", data1);
  }
  updateFurniture(data:any, furnitureCode:any):Observable<any>{
    return this.httpClient.put('${http://localhost:8080/api/v1/updateUser/}${furnitureCode}',data)
  }
  deleteFurniture(furnitureCode:any){
    return this.httpClient.delete<any>(this.URL + '/deleteById/' + furnitureCode)
  }
}
