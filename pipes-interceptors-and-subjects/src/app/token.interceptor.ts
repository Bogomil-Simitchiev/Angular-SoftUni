// src/app/interceptors/auth-interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer your-token')
    });

    console.log('Intercepted request:', authReq);

    // Pass on the cloned request instead of the original request
    return next.handle(authReq);
  }
}
