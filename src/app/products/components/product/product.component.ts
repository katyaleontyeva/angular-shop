import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string = 'Product name';
  description: string = 'Product description';
  price: number = 100;
  isAvailable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log('Product added to cart');
  }

}
