import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CartModel } from './cart/components/models';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle')
  title: ElementRef<HTMLInputElement>;
  cart: Promise<CartModel>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  ngAfterViewInit() {
    this.title.nativeElement.innerHTML = 'Plants Shop';
  }
}
