import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[noWhitespace]'
})
export class NoWhitespaceDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    const trimmedValue = initialValue.replace(/\s+/g, '');
    if (initialValue !== trimmedValue) {
      this.el.nativeElement.value = trimmedValue;
      event.stopPropagation();
    }
  }
}
