import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssGridComponent } from './css-grid/css-grid.component';
import { CssFlexComponent } from './css-flex/css-flex.component';
import { CssLoadersComponent } from './css-loaders/css-loaders.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CssGridComponent,
    CssFlexComponent,
    CssLoadersComponent,
    FlexLayoutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
