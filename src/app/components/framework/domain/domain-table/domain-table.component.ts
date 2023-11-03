import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-domain-table',
  templateUrl: './domain-table.component.html',
  styleUrls: ['./domain-table.component.css'],
})
export class DomainTableComponent {
  @Input() domainList: any;
  tableData: any[] = [
    {
      name: 'TATA Indicom',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry......',
      domainManager: 'Daniel Dsouza',
      email: 'daniel.s@nomail.com',
      status: './assets/images/status.svg',
    },
  ];
}
