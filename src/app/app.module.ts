import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    CoreModule,
    SharedModule,
    CartModule,
    OrdersModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
