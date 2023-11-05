import { Component, ElementRef, Input, Renderer2, ViewChild, OnChanges } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-controls-table',
  templateUrl: './controls-table.component.html',
  styleUrls: ['./controls-table.component.css'],
})
export class ControlsTableComponent {
  @Input() controlsList: any;
  @Input() search!: any;
  @ViewChild('table') table!: ElementRef;

  tableHeaders: any[] = [
    { index: 0, label: 'Domain Name' },
    { index: 1, label: 'Control Code' },
    { index: 2, label: 'Control Name' },
    { index: 3, label: 'Description' },
    { index: 4, label: 'Reference Link' },
    { index: 5, label: 'Risk Rating' },
  ];

  private initialized = false;
  private selectElement: any;

  constructor(private renderer: Renderer2) { }

  ngOnChanges(changes: any) {
    this.filterTable(changes?.search?.currentValue);
  }

  ngAfterViewInit() {
    this.renderer.listen('window', 'load', () => {
      setTimeout(() => {
        this.selectElement = $(this.table.nativeElement).DataTable({
          dom: 'rtip',
          language: {
            paginate: {
              previous: '<img src="./assets/images/left_arrow_dark.svg">',
              next: '<img src="./assets/images/right_arrow_teal.svg">',
            },
          },
          initComplete: () => {
            this.initialized = true;
          },
        });
      }, 500);
    });
  }

  filterTable(searchTerm: string | null) {
    if (!this.initialized) {
      return;
    }
    // this.selectElement.search(searchTerm).draw();
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
