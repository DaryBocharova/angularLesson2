import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonWithSwitchComponent } from './button-with-switch/button-with-switch.component';
import { ToggleDirective } from './button-with-switch/toggle.directive';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    ButtonWithSwitchComponent,
    ToggleDirective
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
