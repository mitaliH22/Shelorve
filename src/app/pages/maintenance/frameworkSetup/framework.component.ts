import { Component } from '@angular/core';
import { FrameworkService } from 'src/app/services/framework.service';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css'],
})
export class FrameworkComponent {
  totalResults: number = 0;
  resultsPerPage: number = 10;
  currentPage: number = 1;
  frameworkList!: any;
  formData!: any;
  selectedFile: any;

  constructor(private operation: OperationsService) { }

  ngOnInit() {
    this.operation.getOperation('/framework').subscribe({
      next: (data) => {
        this.frameworkList = data;
        this.totalResults = this.frameworkList?.length || 0;
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

  editData(data: any) {
    this.formData = data;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target?.files[0]?.name;
  }
  
}
