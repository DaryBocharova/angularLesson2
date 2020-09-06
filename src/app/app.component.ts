import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isDisable:boolean = false;

  toggleAction() {
this.isDisable = !this.isDisable;
  }

  test() {
    console.log('works');
  }
}
