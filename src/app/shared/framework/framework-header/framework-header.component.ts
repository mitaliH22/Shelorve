import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-framework-header',
  templateUrl: './framework-header.component.html',
  styleUrls: ['./framework-header.component.css'],
})
export class FrameworkHeaderComponent {
  showUploadFramework: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe((segments) => {
      const assessmentRoute = 'assessments';
      const currentRoute = segments.map((segment) => segment.path).join('/');

      if (currentRoute.endsWith(assessmentRoute)) {
        this.showUploadFramework = false;
      }
    });
  }
}
