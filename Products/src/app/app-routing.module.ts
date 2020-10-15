import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import {NewproductComponent} from "./newproduct/newproduct.component";
import {EditproductComponent} from "./editproduct/editproduct.component"
import {DeleteproductComponent} from "./deleteproduct/deleteproduct.component"
import {LoginComponent} from "./login/login.component"
import {RegisterComponent}  from "./register/register.component"


const routes: Routes = [{path:"", component:ProductlistComponent},
                        {path:"add", component:NewproductComponent},
                       {path:"edit/:id", component:EditproductComponent},
                      {path:"delete/:id", component:DeleteproductComponent},
                      {path:"login", component:LoginComponent},
                      {path:"register", component:RegisterComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
