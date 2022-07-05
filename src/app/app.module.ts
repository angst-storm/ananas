import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {CompaniesService} from './services/companies.service';
import {MatDialogModule} from "@angular/material/dialog";
import {AddCompanyComponent} from './add-company/add-company.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {InlineEditComponent} from './inline-edit/inline-edit.component';
import {AutofocusDirective} from "./directives/autofocus.directive";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddCompanyComponent,
    InlineEditComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [
    CompaniesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
