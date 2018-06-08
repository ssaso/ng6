import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArsComponentsModule } from 'ars-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ArsComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
