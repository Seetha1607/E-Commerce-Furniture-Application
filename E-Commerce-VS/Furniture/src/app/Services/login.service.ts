import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Model/products';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoginSuccess:boolean = false;
  
  loginFunction(user:User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8081/userservice/login",user);
  }
  storeData(data1:User) {
        return this.httpClient.post("http://localhost:8081/userservice/register", data1);
      }
  
  fetchFurniture():Observable<Array<Products>>{
    return this.httpClient.get<Array<Products>>("http://localhost:8080/api/v1/fetchAll");
  }
  constructor(private httpClient:HttpClient) { }
}
