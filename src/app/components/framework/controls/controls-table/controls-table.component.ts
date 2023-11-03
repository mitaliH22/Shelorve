import { Component,Input } from '@angular/core';

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

  @Input() controlsList: any;
  
  
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
