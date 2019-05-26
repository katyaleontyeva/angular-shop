import { Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter, HostBinding } from '@angular/core';
import { CartItemModel } from '../models/cart-item.model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() cartItem: CartItemModel;
  @Output() deleteItem = new EventEmitter();

  @HostBinding('class')
  attrClass = 'list-group-item';

  constructor() { }

  onDelete() {
    this.deleteItem.emit(this.cartItem);
  }

}
