import { Component } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
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

  constructor() {}

  ngOnInit(): void {}

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
