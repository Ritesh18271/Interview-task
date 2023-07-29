import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'',redirectTo:'product',pathMatch:'full'
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'update',component:AddProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
