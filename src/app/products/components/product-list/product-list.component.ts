import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.products = this.productsService.getProducts();
  }

}
