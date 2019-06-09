import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent, ProductComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
    data: {
      title: 'Products',
    }
  },
  {
    path: 'product/:productID',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
