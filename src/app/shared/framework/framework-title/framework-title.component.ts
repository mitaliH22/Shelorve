import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-framework-title',
  templateUrl: './framework-title.component.html',
  styleUrls: ['./framework-title.component.css']
})
export class FrameworkTitleComponent {
  slug!: string;

  constructor(private activeroute: ActivatedRoute) {
    this.slug = this.activeroute.snapshot.params['slug'];
  }
}
