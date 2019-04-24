import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { LookupdialogComponent } from './declaration/lookupdialog/lookupdialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeclarationComponent,
    LookupdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
