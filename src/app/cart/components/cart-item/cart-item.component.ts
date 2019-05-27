import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, HostBinding } from '@angular/core';
import { CartItemModel } from '../models';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() cartItem: CartItemModel;
  @Output() deleteItem = new EventEmitter();
  @Output() updateItem = new EventEmitter();

  @HostBinding('class')
  attrClass = 'list-group-item';

  constructor() { }

  onDelete() {
    this.deleteItem.emit(this.cartItem);
  }

  onChange() {
    if ( this.cartItem.qty < 1 ) {
      this.deleteItem.emit(this.cartItem);
    } else {
      this.updateItem.emit(this.cartItem);
    }
  }

}
