import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageBusService, MessageType } from './message-bus.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private messageBusService: MessageBusService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('ERROR!');
    return next.handle(req).pipe(
      
      catchError(err => {
        this.messageBusService.notifyForMessage({
          text: err?.error?.message || 'Something went wrong',
          type: MessageType.Error
        });
        return throwError(err);
      })
    );
  }
}
