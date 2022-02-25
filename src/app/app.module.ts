import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivasSwitchcaseComponent } from './diretivas-switchcase/diretivas-switchcase.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasSwitchcaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
