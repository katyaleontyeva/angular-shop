import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CartService
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
