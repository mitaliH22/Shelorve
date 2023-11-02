import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFormComponent } from './control-form.component';

describe('ControlFormComponent', () => {
  let component: ControlFormComponent;
  let fixture: ComponentFixture<ControlFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlFormComponent]
    });
    fixture = TestBed.createComponent(ControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
