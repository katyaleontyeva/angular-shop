import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';

import { CartService } from './services/cart.service';
import { CartListComponent, CartItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent,
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
