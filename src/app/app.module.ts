import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavModule } from './modules/nav/nav.module';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarModule } from './shred/validations/snackbar/snackbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavModule,

    AppRoutingModule,

    BrowserAnimationsModule,
    SnackbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
