import {Component} from '@angular/core';
import {CompaniesService} from "../services/companies.service";
import {Company} from "../models/company.model";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public companiesService: CompaniesService) {
  }

  public deleteCompany(company: Company) {
    let index = this.companiesService.companies.indexOf(company);
    this.companiesService.companies.splice(index, 1);
  }
}
