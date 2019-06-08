import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent, ProductListComponent } from './components';
import { ProductsService } from './services/products.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
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
