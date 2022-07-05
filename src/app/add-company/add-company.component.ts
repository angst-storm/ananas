import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompaniesService} from "../services/companies.service";
import {Company} from "../models/company.model";

@Component({
  selector: 'add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {
  public form: FormGroup = new FormGroup(
    {
      name: new FormControl(''),
      address: new FormControl(''),
      ogrn: new FormControl(''),
      inn: new FormControl('', Validators.required),
      regDate: new FormControl('')
    }
  )

  constructor(private dialog: MatDialogRef<AddCompanyComponent>,
              private companiesService: CompaniesService) {
  }

  submit() {
    if (this.form.valid) {
      let data = this.form.getRawValue()
      this.companiesService.companies.push(new Company(
        data.name,
        data.address,
        data.ogrn,
        data.inn.trim(),
        data.regDate ? new Date(Date.parse(data.regDate)).toLocaleDateString() : data.regDate
      ));
      this.dialog.close();
    }
  }
}
