import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CasierComponent } from './casier/casier.component';
import { CasiersComponent } from './casiers/casiers.component';

@NgModule({
  declarations: [
    AppComponent,
    CasierComponent,
    CasiersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
