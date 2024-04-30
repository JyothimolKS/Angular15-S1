import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[readonlyTextbox]'
})
export class ReadonlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    event.preventDefault();
  }
}
