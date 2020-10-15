import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(private productService:ProductService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    const req= {id:id};
    this.productService.deleteProduct(req);
    setTimeout (() => {
      console.log("Hello from setTimeout");
      this.router.navigate(["/"])
   }, 300);
    
  }

}
