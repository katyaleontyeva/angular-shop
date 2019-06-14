import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log('product review init');
  }

  ngOnDestroy() {
    // Эту строку надо как-то дать пользователю выполнить, чтобы закрыть ревью
    // Вариант предложил в ProductDetailsComponent
    this.router.navigate([{ outlets: { reviews: null } }]);
  }

}
