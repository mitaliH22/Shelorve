import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-framework-header',
  templateUrl: './framework-header.component.html',
  styleUrls: ['./framework-header.component.css'],
})
export class FrameworkHeaderComponent {
  @Output() onSearch: EventEmitter<any> = new EventEmitter()
  showUploadFramework: boolean = true;
  id!: number;
  slug!: string;


  constructor(private route: ActivatedRoute) {
    const { id, slug } = this.route.snapshot.params;
    this.id = id;
    this.slug = slug;
    this.route.url.subscribe((segments) => {
      const assessmentRoute = 'assessments';
      const currentRoute = segments.map((segment) => segment.path).join('/');

      if (currentRoute.endsWith(assessmentRoute)) {
        this.showUploadFramework = false;
      }
    });
  }

  search(e: any){
    this.onSearch.emit(e)
  }
}
