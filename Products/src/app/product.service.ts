import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:4000/productsAPI")
  }
  newProduct(item){
    this.http.post("http://localhost:4000/productsAPI/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }
  getProduct(id){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<any>("http://localhost:4000/productsAPI/getproduct",id,httpOptions )
  }

  editItem(item){
    this.http.put("http://localhost:4000/productsAPI/edit",{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  deleteProduct(id){

    this.http.post("http://localhost:4000/productsAPI/delete",{"tobeDeletedId":id}).subscribe(data=>{console.log(data)})
    
  }
}
