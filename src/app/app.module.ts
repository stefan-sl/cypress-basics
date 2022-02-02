import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIInterceptor } from './main/api.interceptor';

export const mainInterceptors = [
  {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // mainInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
