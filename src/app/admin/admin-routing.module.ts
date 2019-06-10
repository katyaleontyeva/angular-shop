import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent, ProductsComponent, ProductFormComponent } from './components';

import { ProductResolveGuard } from './guards/product-resolve.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'products', component: ProductsComponent },
          { path: 'product/add', component: ProductFormComponent },
          { path: 'product/edit/:productID',
            component: ProductFormComponent,
            resolve: {
              product: ProductResolveGuard
            }
          },
          { path: '', component: DashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [AdminComponent];
}
