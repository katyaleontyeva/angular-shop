import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Promise<Array<CartItemModel>>;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }

  onDeleteItem(cartItem: CartItemModel) {
    this.cartService.removeItem(cartItem);
  }

  emptyCart() {
   this.cartService.emptyCart();
  }

  checkout(): void {
    this.cartItems.then((resolve) => console.log(JSON.stringify(resolve)))
  }

}
