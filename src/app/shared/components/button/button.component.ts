import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CodeGeneratorService } from '../../../modules/home/pages/code-generator/services/code-generator.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: 'primary' | 'secondary' = "primary";
  @Input() label: string = '';
  @Input() routerLink: string | undefined;
  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
