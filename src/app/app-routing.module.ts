import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/components';
import { CartListComponent } from './cart/components';
import { OrderComponent } from './orders/order/order.component'
import { LoginComponent } from './layout/login/login.component';

import { PathNotFoundComponent } from './layout/path-not-found/path-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'cart',
    component: CartListComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
