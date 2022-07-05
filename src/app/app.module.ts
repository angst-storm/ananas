import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {CompaniesService} from './services/companies.service';
import {MatDialogModule} from "@angular/material/dialog";
import {AddCompanyComponent} from './add-company/add-company.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddCompanyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    CompaniesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
