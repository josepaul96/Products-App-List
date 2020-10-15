import { Component, OnInit } from '@angular/core';
import {ProductModel} from "./product.model"
import { ProductService } from "../product.service"

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:ProductModel[];

  imageWidth:Number = 50;
  imageMargin:Number = 2; 
  constructor( private productService: ProductService) { }
  title:String="Product List"
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data))
    })
    
  }


}
