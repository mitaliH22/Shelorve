import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkControlsFormComponent } from './framework-controls-form.component';

describe('FrameworkControlsFormComponent', () => {
  let component: FrameworkControlsFormComponent;
  let fixture: ComponentFixture<FrameworkControlsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkControlsFormComponent]
    });
    fixture = TestBed.createComponent(FrameworkControlsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
