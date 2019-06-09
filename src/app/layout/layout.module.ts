import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  declarations: [
    AboutComponent,
    PathNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class LayoutModule { }
