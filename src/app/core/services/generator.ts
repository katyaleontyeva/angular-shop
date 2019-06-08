import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

function GeneratorFactory(n: number = 1) {
  return (): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const len = chars.length;

    let str = '';

    for (let i = 0; i < n; i++) {
      str += chars.charAt(Math.floor(Math.random() * len));
    }

    return str;
  };
}

@Injectable({
  providedIn: CoreModule,
  useFactory: GeneratorFactory(10)
})
export class GeneratorService {

}
