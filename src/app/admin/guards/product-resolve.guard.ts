import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of, from } from 'rxjs';
import { map, catchError, take, delay, finalize } from 'rxjs/operators';

import { AdminServicesModule } from '../admin-services.module';

import { ProductModel } from '../../products/models/product.model';
import { ProductsService } from '../../products/services/products.service';

@Injectable({
  providedIn: AdminServicesModule
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    if (!route.paramMap.has('productID')) {
      this.router.navigate(['admin/products']);
    }

    const id = +route.paramMap.get('productID');

    return from(this.productsService.getProduct(id))
      .pipe(
        map((product: ProductModel) => {
          if (product) {
            console.log(`Edit product: ${product.id} ${product.name}`);
            return product;
          } else {
            console.log(`No product found. Redirect to products`);
            this.router.navigate(['admin/products']);
            return null;
          }
        })
      );
  }
}
