import {Injectable} from '@angular/core';
import {Company} from "../models/company.model";
import {HttpClient} from "@angular/common/http";
import {DadataModel} from "../models/dadata.model";

@Injectable({providedIn: 'root'})
export class CompaniesService {
  constructor(private httpClient: HttpClient) {
  }

  public companies: Company[] = [
    new Company('Ежики', 'ул. Лесная, д. 1', '000', '111', '09.05.2002'),
    new Company('Лисички', 'ул. Лесная, д. 2', '222', '333', '05.06.2003'),
    new Company('Мишки', 'ул. Лесная, д. 3', '444', '555', '13.03.1997')
  ]

  public downloadCompany(company: Company) {
    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    let token = "bd533cb1d95ce8da353bba2bb1fae6f780ac73be";

    this.httpClient
      .post<DadataModel>(url, {query: company.inn}, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
        }
      })
      .subscribe((res: DadataModel) => {
        if (res.suggestions.length > 0) {
          company.name = res.suggestions[0].value
          let data = res.suggestions[0].data
          company.ogrn = data.ogrn
          company.inn = data.inn
          company.address = data.address.value
          company.regDate = new Date(data.state.registration_date).toLocaleDateString()
        } else {
          company.name = 'Нет данных'
          company.ogrn = 'Нет данных'
          company.address = 'Нет данных'
          company.regDate = 'Нет данных'
        }
      })
  }
}
