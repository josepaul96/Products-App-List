import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
import { Router, ActivatedRoute } from '@angular/router';
import {ProductModel} from "../productlist/product.model";


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  title :String= "Edit Product";
  item;
  constructor(private productService:ProductService,private activatedRoute: ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    const req= {id:id};
    this.productService.getProduct(req).subscribe((data)=>{
    this.item = JSON.parse(JSON.stringify(data))
  })
}

editProduct(){
     this.productService.editItem(this.item);
    console.log(this.item);
    setTimeout (() => {
      console.log("Hello from setTimeout");
      this.router.navigate(["/"])
   }, 300);
    
}
}
