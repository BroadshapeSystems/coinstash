import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { AppConfigModule } from './app.config';
import { routing } from './app.routing';
import { dependencies } from './app.dependencies';
import { WalletComponent } from './wallet/wallet.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WalletComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule,
    routing,
    MaterializeModule,
    AppConfigModule
  ],
  providers: [dependencies],
  bootstrap: [AppComponent]
})
export class AppModule { }
