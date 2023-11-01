import { Component } from '@angular/core';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css'],
})
export class DomainComponent {
  tableData: any[] = [
    {
      name: 'TATA Indicom',
      description: 'Lorem Ipsum is simply dummy text...',
      domainManager: 'Daniel Dsouza',
      email: 'daniel.s@nomail.com',
      status: './assets/images/status.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
