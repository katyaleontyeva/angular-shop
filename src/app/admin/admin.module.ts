import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './components';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminServicesModule } from './admin-services.module';

@NgModule({
  declarations: [
    AdminRoutingModule.components,
    ProductsComponent,
    ProductFormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminServicesModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
