import { Directive, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  condition:boolean = true;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
   var checkbox = this.renderer.createElement('input');
  this.renderer.setAttribute(checkbox, 'type', 'checkbox');
  this.renderer.listen(checkbox, 'click', this.onChange);
  this.renderer.appendChild(element.nativeElement, checkbox);
  }

  @HostBinding('disabled')
  lockAction() {
   this.condition? 'disabled': null;
  }

  @HostBinding('class.mat-button-disabled') 
  get lock() {
    return this.condition; }

  onChange = () => {
    this.condition = !this.condition;
  }
  
}
