import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'activeRoute'
})
export class ActiveRoutePipe implements PipeTransform {
  constructor(private router: Router) { }
  transform(targetRoute: string | string[] | { link: string }[]): boolean {
    const currentRoute = this.router.url;
    if (Array.isArray(targetRoute)) {
      return targetRoute.some(route => route === currentRoute || route.link === currentRoute);
    } else {
      return currentRoute === targetRoute;
    }
  }
}
