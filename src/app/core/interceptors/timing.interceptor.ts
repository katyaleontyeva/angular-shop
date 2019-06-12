import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.url.includes('products')) {
      // API to measure request latency https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
      const t0 = performance.now();

      return next.handle(req)
        .pipe(
          map((res) => {
            const t1 = performance.now();
            console.log(`Call ${req.method} ${req.url} took ${t1 - t0} milliseconds.`);
            return res;
          }),
        );
    }

    return next.handle(req);
  }
}
