import { Component } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  onPageChange(page: number): void {
    console.log(`Switched to page ${page}`);
  }
}
