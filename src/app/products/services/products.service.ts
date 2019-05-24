import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

import { productsData } from '../../shared/mocks';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: ProductModel[] = productsData;

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
