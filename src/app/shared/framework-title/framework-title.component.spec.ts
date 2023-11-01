import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkTitleComponent } from './framework-title.component';

describe('FrameworkTitleComponent', () => {
  let component: FrameworkTitleComponent;
  let fixture: ComponentFixture<FrameworkTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkTitleComponent]
    });
    fixture = TestBed.createComponent(FrameworkTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
