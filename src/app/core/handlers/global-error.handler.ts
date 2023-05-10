import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ErrorService } from '../services/errors/error.service';
import { NotificationService } from '../../shared/services/notifications/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  static handleError: (error: unknown) => void;

  constructor(
    private errorService: ErrorService,
    private notifier: NotificationService
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.notifier.showError(this.errorService.getServerMessage(error));
    } else {
      this.notifier.showError(this.errorService.getClientMessage(error));
    }
  }
}
