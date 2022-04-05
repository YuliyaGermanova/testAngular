import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyNonNegativeValuesDirective } from './directives/only-non-negative-values';
import { ConvertBoolPipe } from './pipes/convert-bool-pipe';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNonNegativeValuesDirective,
    ConvertBoolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
