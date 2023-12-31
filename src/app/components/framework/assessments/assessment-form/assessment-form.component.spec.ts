import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentFormComponent } from './assessment-form.component';

describe('AssessmentFormComponent', () => {
  let component: AssessmentFormComponent;
  let fixture: ComponentFixture<AssessmentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentFormComponent]
    });
    fixture = TestBed.createComponent(AssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
