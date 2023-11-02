import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  pageTitle: string = 'User';
  pageIconSrc: string = './assets/images/maintenance_dark.svg';

  onPageChange(page: number): void {
    console.log(`Switched to page ${page}`);
  }
}
