import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

import { CartModel, CartItemModel } from '../models';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart: Promise<CartModel>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  onDeleteItem(cartItem: CartItemModel) {
    this.cartService.removeItem(cartItem);
  }

  onIncrementItem(cartItem: CartItemModel) {
    this.cartService.incrementItem(cartItem);
  }

  onDecrementItem(cartItem: CartItemModel) {
    this.cartService.decrementItem(cartItem);
  }

  emptyCart() {
   this.cartService.emptyCart();
  }

  checkout(): void {
    this.cart.then((resolve) => console.log(JSON.stringify(resolve)));
  }

}
