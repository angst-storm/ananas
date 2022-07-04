import {Component} from '@angular/core';
import {CompaniesService} from "../services/companies.service";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public service: CompaniesService) {
  }
}
