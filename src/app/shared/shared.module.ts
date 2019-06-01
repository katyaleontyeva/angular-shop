import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';

// Так список будет в одном месте и не будет дублироваться в массивах declarations и exports
const compAndDir = [HighlightDirective];
@NgModule({
  declarations: [...compAndDir],
  imports: [CommonModule],
  exports: [...compAndDir]
})
export class SharedModule {}
