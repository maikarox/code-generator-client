import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { GlobalErrorHandler } from '../handlers/global-error.handler';
import { environment } from '../../../environments/environment';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private errorHandler: GlobalErrorHandler) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          this.errorHandler.handleError(error);

          if (!environment.production) {
            console.error('Server Error:', error.message);
          }
        }

        throw new Error(error.message);
      })
    );
  }
}
