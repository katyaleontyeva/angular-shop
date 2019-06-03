import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderByPipe } from './pipes/orderby.pipe';

// Так список будет в одном месте и не будет дублироваться в массивах declarations и exports
const compAndDir = [HighlightDirective, OrderByPipe];
@NgModule({
  declarations: [...compAndDir],
  imports: [CommonModule],
  exports: [...compAndDir]
})
export class SharedModule {}
