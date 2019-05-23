import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
    return this.cart;
  }

  emptyCart() {
    this.cart = [];
    return this.cart;
  }
}
