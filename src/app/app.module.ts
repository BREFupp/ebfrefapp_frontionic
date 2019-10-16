import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbrefComponent } from './ebref/ebref.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsComponent } from './patients/patients.component';
import { PatientsSingleComponent } from './patients-single/patients-single.component';

@NgModule({
  declarations: [
    AppComponent,
    EbrefComponent,
    PatientsComponent,
    PatientsSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
