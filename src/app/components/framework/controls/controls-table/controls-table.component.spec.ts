import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsTableComponent } from './controls-table.component';

describe('ControlsTableComponent', () => {
  let component: ControlsTableComponent;
  let fixture: ComponentFixture<ControlsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlsTableComponent]
    });
    fixture = TestBed.createComponent(ControlsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
