import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  totalResults: number = 0;
  resultsPerPage: number = 10;
  currentPage: number = 1;
  selectedFile: any;

  constructor(private operation: OperationsService) { }
  userList!: any;

  ngOnInit() {
    this.operation.getOperation('/users').subscribe({
      next: (data) => {
        this.userList = data;
        this.totalResults = this.userList?.length || 0;

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get pageCount(): number {
    return Math.max(1, Math.ceil(this.totalResults / this.resultsPerPage));
  }

  onPageChange(page: number): void {
    console.log(`Switched to page ${page}`);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target?.files[0]?.name;
  }
}
