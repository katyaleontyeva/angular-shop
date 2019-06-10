import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {switchMap} from 'rxjs/operators';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          return params.get('productID') ? this.productsService.getProduct(+params.get('productID')) : Promise.resolve(null);
        })
      )
      .subscribe(
        product => this.product = {...product},
        err => console.log(err)
      );
  }

  // TODO Что-то не работает
  onDisplayReviews(): void {
    this.router.navigate([{ outlets: { reviews: ['reviews'] } }], { relativeTo: this.route });
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }

}
