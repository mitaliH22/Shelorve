import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from '@khazii/ngx-intl-tel-input';
import { OperationsService } from 'src/app/services/operations.service';


@Component({
	selector: 'app-company-form',
	templateUrl: './company-form.component.html',
	styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent {
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

	companyForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private operationService: OperationsService) {
		this.companyForm = this.formBuilder.group({
			companyName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', [Validators.required, Validators.minLength(10)]],
			address1: ['', Validators.required],
			address2: ['', Validators.required],
			city: ['', Validators.required],
			state: ['', Validators.required],
			country: ['', Validators.required],
			zipCode: ['', Validators.required]
		});
	}

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

	onSubmit(e: any) {
		e.preventDefault();
		this.operationService.createCompany(this.companyForm.value).subscribe({
			next: (response) => {
				console.log(response);
			},
			error: (error) => {
				console.error(error);
			}
		});
	}
}
