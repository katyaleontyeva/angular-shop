import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantsService } from './services/constants.service';
import { Generator10, GeneratorFactory } from './services/generator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: { App: 'PlantShop', Ver: '1.0' } },
    { provide: Generator10, useFactory: GeneratorFactory(10)}
  ]
})
export class CoreModule { }
