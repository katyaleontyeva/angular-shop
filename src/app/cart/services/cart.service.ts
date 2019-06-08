import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product.model';
import { CartModel, CartItemModel } from '../components/models';

const cart = new CartModel();
const cartPromise = Promise.resolve(cart);

@Injectable()
export class CartService {

  constructor() { }

  getCart() {
    return cartPromise;
  }

  addItem(product: ProductModel) {
    const i = cart.items.findIndex(item => item.id === product.id);

    if (i > -1) {
      // If product is already in the cart, replace it with new item (same id and name, new quantity)
      // Use splice instead of push because we need the item to stay on the same position in cart
      const qty = cart.items[i].qty + 1;
      const newItem = new CartItemModel({id: product.id, name: product.name, price: product.price, qty});
      cart.items.splice(i, 1, newItem);
    } else {
      // If product is not in the cart, create new item and add to the end
      const newItem = new CartItemModel({id: product.id, name: product.name, price: product.price, qty: 1});
      cart.items.push(newItem);
    }

    this.updateTotals();
  }

  removeItem(cartItem: CartItemModel) {
    const i = cart.items.findIndex(item => item.id === cartItem.id);

    if (i > -1) {
      cart.items.splice(i, 1);
      this.updateTotals();
    }

  }

  incrementItem(updCartItem: CartItemModel) {
    const cartItem = cart.items.find((item) => item.id === updCartItem.id);

    cartItem.qty += 1;
    this.updateTotals();
  }

  decrementItem(updCartItem: CartItemModel) {
    const cartItem = cart.items.find((item) => item.id === updCartItem.id);

    cartItem.qty -= 1;
    this.updateTotals();
  }

  emptyCart() {
    cart.items.splice(0, cart.items.length);

    this.updateTotals();
  }

  updateTotals() {
    cart.total = this.getTotalQty();
    cart.sum = this.getTotalSum();
  }

  private getTotalQty() {
    const total = cart.items.reduce((sum, item) => {
      return sum + item.qty;
    }, 0);

    return total;
  }

  private getTotalSum() {
    const total = cart.items.reduce((sum, item) => {
      return sum + (item.qty * item.price);
    }, 0);

    return total.toFixed(2);
  }
}
