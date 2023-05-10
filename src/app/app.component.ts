import { Component, ErrorHandler, OnInit } from '@angular/core';
import { GlobalErrorHandler } from '../app/core/handlers/global-error.handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private errorHandler: ErrorHandler) {}

  ngOnInit() {
    this.errorHandler.handleError = GlobalErrorHandler.handleError;
  }
}
