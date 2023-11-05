import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent {
  id!: number;
  slug!: string;
  searchValue!: string;
  constructor(private operations: OperationsService, private route: ActivatedRoute) { 
    const { id, slug } = this.route.snapshot.params;
    this.id = id;
    this.slug = slug;
  }
  totalResults: number = 0;
  resultsPerPage: number = 10;
  currentPage: number = 1;
  selectedFile: any;

  domainList!: any;
  ngOnInit() {
    this.operations.getOperation(`/frameworksDomain/${this.id}`).subscribe({
      next: (data: any) => {
        this.domainList = data;  
        this.totalResults = this.domainList?.length || 0;
      },
      error: (err) => {
        console.log(err);
      }
    })
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

  search(e:any){
    this.searchValue = e.target.value;
  }

}
