import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  @Input() frameworkList: any;
  @Output() onEdit: EventEmitter<any> = new EventEmitter()
  @ViewChild('table') table!: ElementRef;

  tableData = [
    {
      name: 'Daniel Dsouza',
      description:
        'It is a long established fact that a reader will be distracted...',
      statusImageSrc: './assets/images/status.svg',
      editImageSrc: './assets/images/edit.svg',
    },
  ];

  ngAfterViewInit() {
    const selectElement = $(this.table.nativeElement);
    selectElement.DataTable();
  }

  onEditData(item: any) {
    this.onEdit.emit(item);
  }
}
