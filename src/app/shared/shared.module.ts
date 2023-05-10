import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { StringArrayIteratorComponent } from './components/string-array-iterator/string-array-iterator.component';
import { HeaderComponent } from './components/header/header.component';
import { BoxComponent } from './components/box/box.component';
import { NotificationService } from './services/notifications/notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    BoxComponent,
    ButtonComponent,
    HeaderComponent,
    StringArrayIteratorComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatSnackBarModule, RouterModule],
  exports: [
    BoxComponent,
    ButtonComponent,
    HeaderComponent,
    StringArrayIteratorComponent,
  ],
  providers: [NotificationService],
})
export class SharedModule {}
