import { Component } from '@angular/core';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css'],
})
export class FrameworkComponent {
  pageTitle: string = 'Framework Setup';
  pageIconSrc: string = './assets/images/maintenance_dark.svg';

  onPageChange(page: number): void {
    console.log(`Switched to page ${page}`);
  }
}
