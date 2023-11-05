import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-framework-domain-form',
  templateUrl: './framework-domain-form.component.html',
  styleUrls: ['./framework-domain-form.component.css']
})
export class FrameworkDomainFormComponent {
  form!: FormGroup;
  frameworkId: any;
  constructor(private fb: FormBuilder, private operations: OperationsService, private route: ActivatedRoute) {
    this.frameworkId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.form = this.fb.group({
      domainDescription: ['', Validators.required],
      domainID: ['', Validators.required],
      domainManagerEmail: ['', [Validators.required, Validators.email]],
      domainManagerName: ['', Validators.required],
      domainName: ['', Validators.required],
      frameworksID: ['', Validators.required],
    });
  }

  selectDomainOptions = [
    {
      value: 'Select Domain Name',
      label: 'Select Domain Name'
    },
    {
      value: 'Domain Name 1',
      label: 'Domain Name 1'
    },
    {
      value: 'Domain Name 2',
      label: 'Domain Name 2'
    },
    {
      value: 'Domain Name 3',
      label: 'Domain Name 3'
    },
    {
      value: 'Domain Name 4',
      label: 'Domain Name 4'
    },
  ]

  selectDomainManagerOptions = [
    {
      value: 'Select Domain Manager',
      label: 'Select Domain Manager'
    },
    {
      value: 'Domain Manager 1',
      label: 'Domain Manager 1'
    },
    {
      value: 'Domain Manager 2',
      label: 'Domain Manager 2'
    },
    {
      value: 'Domain Manager 3',
      label: 'Domain Manager 3'
    },
    {
      value: 'Domain Manager 4',
      label: 'Domain Manager 4'
    },
  ]

  onSelectedValue(val: string, type = ''): void {
    this.form.patchValue({
      [type]: val
    });
  }

  onSubmit() {
    this.operations.addDomain({ ...this.form.value, framworkId: this.frameworkId }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => { }
    })
  }
}
