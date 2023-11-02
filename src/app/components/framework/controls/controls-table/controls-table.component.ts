import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-controls-table',
  templateUrl: './controls-table.component.html',
  styleUrls: ['./controls-table.component.css'],
})
export class ControlsTableComponent {
  tableData: any[] = [
    {
      domainName: 'TATA Indicom',
      controlCode: 'tata321',
      controlName: 'TATA',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      referenceLink: 'https://shelorve.com/',
      riskRating: 'Low',
    },
  ];

  constructor(private operation: OperationsService) {}

  ngOnInit() {
    this.operation.getOperation('/control').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getRiskColor(riskRating: string): string {
    if (riskRating === 'Low') {
      return '#2da1ad';
    } else if (riskRating === 'Medium') {
      return '#f28e00';
    } else if (riskRating === 'High') {
      return '#cc4e4e';
    } else {
      return '';
    }
  }
}
