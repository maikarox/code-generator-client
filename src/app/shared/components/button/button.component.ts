import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: 'primary' | 'secondary' = "primary";
  @Input() label: string = '';
  @Input() clickAction: Function | undefined;
  @Input() routerLink: string | undefined;

  onClick(): void {
    if (this.clickAction) {
      this.clickAction();
    }
  }
}
