import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { CartItemModel } from '../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() cartItem: CartItemModel;
  @Output() deleteItem = new EventEmitter();
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  @HostBinding('class')
  attrClass = 'list-group-item';

  constructor() {}

  onDelete() {
    this.deleteItem.emit(this.cartItem);
  }

  onIncrease() {
    this.increment.emit(this.cartItem);
  }

  onDecrease() {
    this.decrement.emit(this.cartItem);
  }

}
