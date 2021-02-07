import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavModule } from './modules/nav/nav.module';
import { AppRoutingModule } from './app.routing';
import { SnackbarModule } from './shred/validations/snackbar/snackbar.module';
import { PageNotFoundModule } from './modules/404/404.module';
import { ScrollTopModule } from './modules/scroll-top/scroll-top.module';
import { AuthService } from './modules/authentication/auth.service';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    NavModule,

    AppRoutingModule,

    BrowserAnimationsModule,
    ScrollTopModule,
    SnackbarModule,
    PageNotFoundModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
