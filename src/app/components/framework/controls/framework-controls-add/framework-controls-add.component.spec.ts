import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkControlsAddComponent } from './framework-controls-add.component';

describe('FrameworkControlsAddComponent', () => {
  let component: FrameworkControlsAddComponent;
  let fixture: ComponentFixture<FrameworkControlsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkControlsAddComponent]
    });
    fixture = TestBed.createComponent(FrameworkControlsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
