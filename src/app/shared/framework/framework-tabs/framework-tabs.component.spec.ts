import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkTabsComponent } from './framework-tabs.component';

describe('FrameworkTabsComponent', () => {
  let component: FrameworkTabsComponent;
  let fixture: ComponentFixture<FrameworkTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkTabsComponent]
    });
    fixture = TestBed.createComponent(FrameworkTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
