import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../../shared/enums';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  isAvailable: boolean;

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log('Product added to cart');
  }

}
