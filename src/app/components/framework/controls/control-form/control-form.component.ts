import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css'],
})
export class ControlFormComponent {
  selectDomainOptions=[
    { value: 'Select Domain Name',
       label: 'Select Domain Name' },
      { value: 'Domain Name 1',
       label: 'Domain Name 1' },
       { value: 'Domain Name 2',
       label: 'Domain Name 2' },
       { value: 'Domain Name 3',
       label: 'Domain Name 3' },
       { value: 'Domain Name 4',
       label: 'Domain Name 4' },
    ]

selectControlOptions=[
  { value: 'Select Control Owner',
     label: 'Select Control Owner' },
    { value: 'Control Owner 1',
     label: 'Control Owner 1' },
     { value: 'Control Owner 2',
     label: 'Control Owner 2' },
     { value: 'Control Owner 3',
     label: 'Control Owner 3' },
     { value: 'Control Owner 4',
     label: 'Control Owner 4' },
  ]
  
  onSelectedValue(val: string): void {
    console.log(`Selected ${val}`);
  }
}
