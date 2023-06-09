import { Component } from '@angular/core';
import { CodeGeneratorService } from './services/code-generator.service';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss'],
})
export class CodeGeneratorComponent {
  codes: string[] = [];

  constructor(private codeGeneratorService: CodeGeneratorService) {}

  generateCodes() {
    this.codeGeneratorService.getCodes().subscribe({
      next: ({ codes }) => (this.codes = codes),
      error: (err) => console.error(err),
    });
  }

  onButtonClick(): void {
    this.generateCodes();
  }
}
