import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { GlobalErrorHandler } from './handlers/global-error.handler';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    GlobalErrorHandler
  ],
})
export class CoreModule {}
