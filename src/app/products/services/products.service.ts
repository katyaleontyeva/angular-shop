import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductModel } from '../models/product.model';


@Injectable()
export class ProductsService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(this.productsUrl)
      .pipe(catchError((err) => throwError('Error in getProducts method')));
  }

  getProduct(id: number | string): Promise<ProductModel> {
    return this.getProducts()
      .toPromise()
      .then(products => products.find(product => product.id === +id))
      .catch((err) => Promise.reject(err));
  }

}
