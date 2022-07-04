import {Injectable} from '@angular/core';
import {Company} from "../models/company.model";

@Injectable({providedIn: 'root'})
export class CompaniesService {
  public companies: Company[] = [
    new Company('Ежики', 'ул. Лесная, д. 1', '000', '111', new Date(2002, 4, 9)),
    new Company('Лисички', 'ул. Лесная, д. 2', '222', '333', new Date(2003, 5, 5)),
    new Company('Мишки', 'ул. Лесная, д. 3', '444', '555', new Date(1997, 2, 13))
  ]
}
