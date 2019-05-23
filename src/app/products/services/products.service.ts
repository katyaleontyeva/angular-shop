import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

import { productsData } from '../../shared/mocks';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = productsData;

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
