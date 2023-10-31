import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  tableData = [
    {
      name: 'Daniel Dsouza',
      description:
        'It is a long established fact that a reader will be distracted...',
      statusImageSrc: './assets/status.svg',
      editImageSrc: './assets/edit.svg',
    },
    // Add more data objects here
  ];
}
