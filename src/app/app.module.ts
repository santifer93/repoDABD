import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VetAppComponent } from './vet-app/vet-app.component';


@NgModule({
  declarations: [
    AppComponent,
    VetAppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [VetAppComponent]
})
export class AppModule { }
