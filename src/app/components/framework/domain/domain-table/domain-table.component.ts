import { Component, ElementRef, Input, Renderer2, ViewChild, OnChanges, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-domain-table',
  templateUrl: './domain-table.component.html',
  styleUrls: ['./domain-table.component.css'],
})
export class DomainTableComponent implements OnChanges, OnDestroy {
  @Input() domainList: any;
  @Input() search!: any;
  @ViewChild('table') table!: ElementRef;

  tableHeaders: any[] = [
    { index: 0, label: 'Domain Name' },
    { index: 1, label: 'Description' },
    { index: 2, label: 'Domain Manager' },
    { index: 3, label: 'Email' },
    { index: 4, label: 'Status' },
    { index: 5, label: 'Action' },
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
    this.selectElement.search(searchTerm).draw();
  }

  ngOnDestroy() {
    if (this.initialized) {
      this.initialized = false;
      this.selectElement.destroy(true);
    }
  }
}
