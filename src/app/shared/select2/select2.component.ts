import { Component, ElementRef, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-select2',
  template: `
    <select #select2>
      <option *ngFor="let option of options"  [value]="option.value">{{ option.label }}</option>
    </select>
  `,
  styleUrls: ['./select2.component.css']
})
export class Select2Component implements AfterViewInit {
  @ViewChild('select2') select2!: ElementRef;
  @Input() options: { value: string, label: string }[] = [];
  @Output() selectedValue = new EventEmitter<string>();

  ngAfterViewInit() {
    const selectElement = $(this.select2.nativeElement);
    selectElement.select2();

    selectElement.on('change', (e: any) => {
      this.selectedValue.emit(e.target.value);
    });
  }
}
