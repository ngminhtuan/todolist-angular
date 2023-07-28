import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[inputField], a[toggle], main[mainToggle]',
})
export class FocusDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement){
    if (!target.classList.contains('toggle')) return;

    if (this.elementRef.nativeElement.classList[0] === 'mainToggle' && !this.elementRef.nativeElement.classList[1]){
      this.renderer.addClass(this.elementRef.nativeElement, 'sign-up-mode')
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'sign-up-mode')
    }
  }

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