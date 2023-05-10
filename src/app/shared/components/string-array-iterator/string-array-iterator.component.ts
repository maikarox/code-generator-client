import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-string-array-iterator',
  templateUrl: './string-array-iterator.component.html',
  styleUrls: ['./string-array-iterator.component.scss'],
})
export class StringArrayIteratorComponent {
  @Input() list: string[] = [];

  trackByFn(_index: number, item: string): string {
    return item;
  }
}
