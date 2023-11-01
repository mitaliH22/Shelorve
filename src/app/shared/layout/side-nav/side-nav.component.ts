import { Component, ElementRef } from '@angular/core';
import { FrameworkService } from 'src/app/services/framework.service';
import { Framework } from 'src/assets/interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  isHovered = false;

  constructor(
    private elementRef: ElementRef,
    private frameworkService: FrameworkService
  ) {}

  menuItems: any[] = [
    { link: '/frameworks/test', label: 'Test 1' },
    { link: '/frameworks/test', label: 'Test 2' },
    { link: '/frameworks/test', label: 'Test 3' },
  ];

  items?: Framework[];

  ngOnInit(): void {
    this.frameworkService?.getAllFrameworks()?.subscribe((data: any) => {
      this.items = data;
      console.log(this.items);
    });
  }
  onMouseEnter() {
    this.isHovered = true;
    document.body.classList.add('effectMenu');
  }

  onMouseLeave() {
    this.isHovered = false;
    document.body.classList.remove('effectMenu');
  }
}
