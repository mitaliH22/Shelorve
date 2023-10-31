import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  pageTitle: string = 'Company Setup';
  pageIconSrc: string = './assets/maintenance_dark.svg';
  
  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const breadcrumbLabel = data['breadcrumb'];
      this.breadcrumbService.updateBreadcrumbs(['Home', breadcrumbLabel]);
    });
  }
}
