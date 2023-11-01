import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkPageComponent } from './framework-page.component';

describe('FrameworkPageComponent', () => {
  let component: FrameworkPageComponent;
  let fixture: ComponentFixture<FrameworkPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkPageComponent]
    });
    fixture = TestBed.createComponent(FrameworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
