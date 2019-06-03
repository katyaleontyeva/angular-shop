import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ProductModel } from '../../models/product.model';

import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild('select')
  select: ElementRef<HTMLSelectElement>;
  products: Promise<Array<ProductModel>>;
  sort = {
    key: null,
    isDesc: false
  };

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.onChange(); // To set initial sorting
  }

  onBuyProduct(product: ProductModel) {
    this.cartService.addItem(product);
  }

  onChange() {
    const selected = this.select.nativeElement.value.split(' ');
    this.sort.key = selected[0];
    this.sort.isDesc = (selected[1] === 'desc');
  }

}
