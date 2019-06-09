import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent, ProductDetailsComponent, ProductReviewsComponent } from './components';

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
    component: ProductDetailsComponent
  },
  {
    path: 'reviews',
    component: ProductReviewsComponent,
    outlet: 'reviews'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
