import {Component} from "@angular/core";
import {CompaniesService} from "../services/companies.service";
import {Company} from "../models/company.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(public companiesService: CompaniesService) {
  }

  public deleteCompany(company: Company) {
    let index = this.companiesService.companies.indexOf(company);
    this.companiesService.companies.splice(index, 1);
  }
}
