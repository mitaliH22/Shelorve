import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceUserFormComponent } from './maintenance-user-form.component';

describe('MaintenanceUserFormComponent', () => {
  let component: MaintenanceUserFormComponent;
  let fixture: ComponentFixture<MaintenanceUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenanceUserFormComponent]
    });
    fixture = TestBed.createComponent(MaintenanceUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
