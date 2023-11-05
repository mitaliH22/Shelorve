import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  controlsList: any = [];
  totalResults: number = 0;
  resultsPerPage: number = 10;
  currentPage: number = 1;
  selectedFile: any;
  id!: number;
  searchValue!: string;
  
  constructor(private operation: OperationsService, private route: ActivatedRoute) {
    const { id } = this.route.snapshot.params;
    this.id = id;
  }

  ngOnInit() {
    this.operation.getOperation('/control').subscribe({
      next: (data: any) => {
        this.controlsList = data;
        // this.controlsList = data.filter((e: any) => e.framworksID == this.id); 
        this.totalResults = this.controlsList?.length || 0;
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

  search(e:any){
    this.searchValue = e.target.value;
  }
}
