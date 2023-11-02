import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery'; 
import 'select2';

@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css'],
})
export class ControlFormComponent {
  ngAfterViewInit(): void {
    $('.custom-class').select2();
  }
}
