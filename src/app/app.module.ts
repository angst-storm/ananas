import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {ListComponent} from "./list/list.component";
import {TableComponent} from "./table/table.component";
import {AddCompanyComponent} from './add-company/add-company.component';
import {InlineEditComponent} from './inline-edit/inline-edit.component';
import {AutofocusDirective} from "./directives/autofocus.directive";
import {CompaniesService} from './services/companies.service';

import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";

const appRoutes: Routes =[
  { path: 'table', component: TableComponent},
  { path: 'list', component: ListComponent},
  { path: '**', redirectTo: 'table'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddCompanyComponent,
    InlineEditComponent,
    AutofocusDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
  ],
  providers: [
    CompaniesService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
