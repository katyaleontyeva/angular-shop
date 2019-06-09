import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;

  @Output() buyProduct = new EventEmitter<ProductModel>();

  constructor() { }

  onBuy(event): void {
    event.stopPropagation();
    this.buyProduct.emit(this.product);
  }

}
