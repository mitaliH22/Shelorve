import { Component } from '@angular/core';
import { Assessment } from 'src/assets/interface';

@Component({
  selector: 'app-assesment-table',
  templateUrl: './assesment-table.component.html',
  styleUrls: ['./assesment-table.component.css'],
})
export class AssesmentTableComponent {
  assessments: Assessment[] = [
    {
      id: 321,
      name: 'Daniel Dsouza',
      startDate: '25 Oct 2023',
      endDate: '30 Oct 2023',
      status: 'In Progress',
      rating: 'Medium',
      controlsCount: 20,
      notStarted: 5,
    },
  ];

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
