import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent, ProductListComponent, ProductDetailsComponent, ProductReviewsComponent } from './components';
import { ProductsService } from './services/products.service';

import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductReviewsComponent
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
