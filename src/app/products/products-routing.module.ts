import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ProductListComponent,
  ProductDetailsComponent,
  ProductReviewsComponent
} from './components';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
    data: {
      title: 'Products'
    }
  },
  {
    path: 'product/:productID',
    component: ProductDetailsComponent,
    // router-outlet is inside ProductDetailsComponent template => should be in children
    children: [
      {
        path: 'reviews',
        component: ProductReviewsComponent,
        outlet: 'reviews'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
