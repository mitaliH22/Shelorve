import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-domain-table',
  templateUrl: './domain-table.component.html',
  styleUrls: ['./domain-table.component.css'],
})
export class DomainTableComponent {

  constructor(private operations: OperationsService) { }
  
  ngOnInit() {
    this.operations.getOperation('/domain').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

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
