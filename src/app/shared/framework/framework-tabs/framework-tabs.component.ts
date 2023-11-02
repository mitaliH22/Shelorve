import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-tabs',
  templateUrl: './framework-tabs.component.html',
  styleUrls: ['./framework-tabs.component.css'],
})
export class FrameworkTabsComponent {
  selectedTab: string = 'domain';

  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }
}
