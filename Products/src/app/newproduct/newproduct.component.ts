import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
import { Router } from '@angular/router';
import {ProductModel} from "../productlist/product.model";

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  title :String= "Add Product";r
  constructor(private productService:ProductService, private router:Router) { }
  newItem = new ProductModel(null, null, null, null, null, null,null,null)

  ngOnInit(): void {  
  }
  addProduct(){
    this.productService.newProduct(this.newItem);
    setTimeout (() => {
      console.log("Hello from setTimeout");
      this.router.navigate(["/"])
   }, 300);
  }
}
