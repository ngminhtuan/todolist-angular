import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[inputField]'
})
export class FocusDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus')
  onFocus() {
    this.renderer.addClass(this.elementRef.nativeElement, 'active');
  }

  @HostListener('blur')
  onBlur() {
    if (this.elementRef.nativeElement.value !== '') return;
    this.renderer.removeClass(this.elementRef.nativeElement, 'active');
  }
  
}