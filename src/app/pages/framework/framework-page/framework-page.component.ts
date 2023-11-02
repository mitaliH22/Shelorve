import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-page',
  templateUrl: './framework-page.component.html',
  styleUrls: ['./framework-page.component.css'],
})
export class FrameworkPageComponent {
  pageTitle: string = 'Framework Setup';
  pageIconSrc: string = './assets/images/maintenance_dark.svg';

  onPageChange(page: number): void {
    console.log(`Switched to page ${page}`);
  }
}
