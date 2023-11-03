import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private frameworkService: FrameworkService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  menuItems!: any[];

  submenuItems: { link: string; label: string }[] = [
    { link: '/company', label: 'Company Setup' },
    { link: '/framework', label: 'Framework Setup' },
    { link: '/users', label: 'User' }
  ];

  ngOnInit(): void {
    this.frameworkService?.getAllFrameworks()?.subscribe((data: any) => {
      this.menuItems = data.map((item: Framework) => {
        return {
          id: item.frameworksID,
          link: `/frameworks/${item.frameworksName}`,
          label: item.frameworksDescription
        };
      });

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
