import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentTableComponent } from './assesment-table.component';

describe('AssesmentTableComponent', () => {
  let component: AssesmentTableComponent;
  let fixture: ComponentFixture<AssesmentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssesmentTableComponent]
    });
    fixture = TestBed.createComponent(AssesmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
