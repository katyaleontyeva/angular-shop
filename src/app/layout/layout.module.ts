import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AboutComponent,
    LoginComponent,
    PathNotFoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class LayoutModule { }
