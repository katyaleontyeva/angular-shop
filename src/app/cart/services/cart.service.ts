import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product.model';

@Injectable()
export class CartService {
  cart: ProductModel[] = [];

  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(product: ProductModel) {
    this.cart.push(product);
    return this.cart;
  }

  emptyCart() {
    this.cart = [];
    return this.cart;
  }
}
