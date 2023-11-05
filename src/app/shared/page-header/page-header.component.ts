import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent {
  @Output() onSearch: EventEmitter<any> = new EventEmitter()
  @Input() pageTitle: string = 'Framework Setup';
  pageIconSrc: string = './images/maintenance_dark.svg';

  search(e: any){
    this.onSearch.emit(e)
  }

}
