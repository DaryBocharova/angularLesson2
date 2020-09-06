import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button-with-switch',
  template:  `
  <mat-slide-toggle
          [disabled]="isDisable">
        Slide me!
      </mat-slide-toggle>
  <input type="checkbox" (click)="toggleAction()" />
`,
  styleUrls: ['./button-with-switch.component.css']
})
export class ButtonWithSwitchComponent {

  isDisable:boolean = false;

  toggleAction() {
this.isDisable = !this.isDisable;
  }

  test() {
    console.log('works');
  }
}
