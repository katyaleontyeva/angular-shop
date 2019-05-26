import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services/cart.service';
import { CartListComponent, CartItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [
    CartService
  ],
  exports: [
    CartListComponent,
    CartItemComponent
  ]
})
export class CartModule { }
