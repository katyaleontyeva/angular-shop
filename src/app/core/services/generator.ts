import { InjectionToken } from '@angular/core';

export const Generator10 = new InjectionToken<any[]>('Generator10');

export function GeneratorFactory(n: number) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  return function(): string {
    // Этот код можно вынести в отдельный сервис и тогда будет как на слайде.
    let str = '';
    const len = chars.length;

    for (let i = 0; i < n; i++) {
      str += chars.charAt(Math.floor(Math.random() * len));
    }

    return str;
  };
}
