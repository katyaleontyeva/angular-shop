import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  sortKey = 'name';
  sortDir = false;
  products$: Observable<ProductModel[]>;

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onBuyProduct(product: ProductModel) {
    this.cartService.addItem(product);
  }

  onClickProduct(product: ProductModel): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }

}
