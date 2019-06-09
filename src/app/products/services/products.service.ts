import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

import { productsData } from '../../shared/mocks';

const productsList = productsData.map(item => new ProductModel(item.id, item.name, item.description, item.details, item.price, item.category, item.images, item.isAvailable));

const productsListPromise = Promise.resolve(productsList);

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Promise<ProductModel[]> {
    return productsListPromise;
  }

  getProduct(id: number | string): Promise<ProductModel> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }

}
