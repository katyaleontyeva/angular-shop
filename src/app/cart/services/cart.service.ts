import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product.model';
import { CartItemModel } from '../components/models/cart-item.model';

const cartItems = [];
const cartItemsPromise = Promise.resolve(cartItems);

@Injectable()
export class CartService {

  constructor() { }

  getCart() {
    return cartItemsPromise;
  }

  addItem(product: ProductModel) {
    if (cartItems.some((item) => item.id === product.id)) {
      this.increaseItemQty(product.id);
    } else {
      const newItem = new CartItemModel({id: product.id, name: product.name, price: product.price, qty: 1});
      cartItems.push(newItem);
    }
  }

  removeItem(cartItem: CartItemModel) {
    const i = cartItems.findIndex(item => item.id === cartItem.id);

    if (i > -1) {
      cartItems.splice(i, 1);
    }
  }

  increaseItemQty(id: number) {
    const cartItem = cartItems.find((item) => item.id === id);
    cartItem.qty += 1;
  }

  decreaseItemQty(id: number) {
    const cartItem = cartItems.find((item) => item.id === id);
    cartItem.qty -= 1;

    if (cartItem.qty === 0) {
      this.removeItem(cartItem);
    }
  }

  emptyCart() {
    cartItems.splice(0, cartItems.length);
  }
}
