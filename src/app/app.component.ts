import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCompanyComponent} from "./add-company/add-company.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {
  }

  public addCompany() {
    this.dialog.open(AddCompanyComponent, {});
  }
}
