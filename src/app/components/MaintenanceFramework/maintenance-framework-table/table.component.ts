import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(private operation: OperationsService) {}

  ngOnInit() {
    this.operation.getOperation('/framework').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  tableData = [
    {
      name: 'Daniel Dsouza',
      description:
        'It is a long established fact that a reader will be distracted...',
      statusImageSrc: './assets/images/status.svg',
      editImageSrc: './assets/images/edit.svg',
    },
  ];
}
