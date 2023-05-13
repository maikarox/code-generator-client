import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  getClientMessage(error: Error): string {
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string | undefined {
    return error.stack;
  }

  getServerMessage(error: HttpErrorResponse): string {
    if (!environment.production) {
      console.error(error.message);
    }

    return `Sorry, there's been an error processing the action.`;
  }
}
