import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: { App: 'PlantShop', Ver: '1.0' } },
  ]
})
export class CoreModule { }
