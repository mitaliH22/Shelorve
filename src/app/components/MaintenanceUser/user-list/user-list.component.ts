import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() userList: any;
  @Input() search!: any;
  @ViewChild('table') table!: ElementRef;

  tableHeaders: any[] = [
    { index: 0, label: 'Name' },
    { index: 1, label: 'Email' },
    { index: 2, label: 'Role' },
    { index: 3, label: 'Department' },
    { index: 4, label: 'Password' },
    { index: 5, label: 'Status' },
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
    // if (!this.initialized) {
    //   return;
    // }
    // this.selectElement.search(searchTerm).draw();
  }

}
