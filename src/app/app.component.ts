import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'shelorve-admin';
  @ViewChild('table') table!: ElementRef;

  ngAfterViewInit() {
    const selectElement = $(this.table.nativeElement);
    selectElement.DataTable();
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        document.body.classList.remove('effectMenu');
      }
    });
  }

}
