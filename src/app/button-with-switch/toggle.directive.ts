import { Directive, DoCheck, HostBinding, OnChanges, Input } from '@angular/core';
import { ButtonWithSwitchComponent } from './button-with-switch.component'

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective implements DoCheck, OnChanges {

  @Input() disabled: boolean;

  constructor(private btnComponent: ButtonWithSwitchComponent) { }

  ngDoCheck() {
    console.log('ngDoCheck directive disabled :', this.disabled);
  }
  
  ngOnChanges() {
    console.log('ngOnChanges directive disabled', this.disabled);
  }
 
}
