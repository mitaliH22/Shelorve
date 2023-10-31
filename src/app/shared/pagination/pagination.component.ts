import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() resultsPerPage: number = 10;
  @Input() totalResults: number = 0;
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  get pages(): number[] {
    const pageCount = Math.ceil(this.totalResults / this.resultsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    this.pageChange.emit(page);
  }
}
