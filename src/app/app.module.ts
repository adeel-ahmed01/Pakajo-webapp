import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './componants/contact/contact.component';
import { ContactsComponent } from './componants/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
