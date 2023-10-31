import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent {
  pageTitle: string = 'Framework Setup';
  pageIconSrc: string = './images/maintenance_dark.svg';

}
