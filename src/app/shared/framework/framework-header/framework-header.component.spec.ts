import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkHeaderComponent } from './framework-header.component';

describe('FrameworkHeaderComponent', () => {
  let component: FrameworkHeaderComponent;
  let fixture: ComponentFixture<FrameworkHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkHeaderComponent]
    });
    fixture = TestBed.createComponent(FrameworkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
