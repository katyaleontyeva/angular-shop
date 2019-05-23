import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(product: Product) {
    this.cartService.addToCart(product);
  }

}
