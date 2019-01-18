import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { AppCommonModule } from './common/app-common.module';
import { BrowserXhr, HttpModule } from '@angular/http';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';
import { MovieService } from './movie-display/services/movie-display.service';
import { PagerService } from './movie-display/services/page-service';

@NgModule({
  declarations: [
    AppComponent,
    MovieDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    HttpModule
  ],
  providers: [
    PagerService, MovieService,
    { provide: BrowserXhr, useClass: CustExtBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
