import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Select2Component } from './select2.component';

describe('Select2Component', () => {
  let component: Select2Component;
  let fixture: ComponentFixture<Select2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Select2Component]
    });
    fixture = TestBed.createComponent(Select2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
