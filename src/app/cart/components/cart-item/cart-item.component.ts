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
  // TODO При стратегии OnPush есть баг: если в product-list второй раз нажать на кнопку Buy,
  //  то данный cart-item не обновляется (т.к. не меняется ссылка, только свойство qty)

  // Либо выключить, лио сделать так, чтобы данные не мутировались
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
