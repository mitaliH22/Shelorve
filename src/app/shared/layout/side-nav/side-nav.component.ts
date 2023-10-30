import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  
  mouseEnter() {
    const leftPart = this.elementRef.nativeElement.querySelector('#leftPart');
    this.renderer.addClass(leftPart, 'toggleSlide');
  }

  mouseLeave() {
     const leftPart = this.elementRef.nativeElement.querySelector('#leftPart');
     this.renderer.removeClass(leftPart, 'toggleSlide');
  }
}
