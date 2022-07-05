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
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      ogrn: new FormControl('', Validators.required),
      inn: new FormControl('', Validators.required),
      regDate: new FormControl(new Date().toISOString().split('T')[0], Validators.required)
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
        data.inn,
        new Date(Date.parse(data.regDate))
      ));
      this.dialog.close();
    }
  }
}
