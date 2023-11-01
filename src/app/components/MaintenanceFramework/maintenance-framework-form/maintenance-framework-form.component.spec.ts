import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceFrameworkFormComponent } from './maintenance-framework-form.component';

describe('MaintenanceFrameworkFormComponent', () => {
  let component: MaintenanceFrameworkFormComponent;
  let fixture: ComponentFixture<MaintenanceFrameworkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenanceFrameworkFormComponent]
    });
    fixture = TestBed.createComponent(MaintenanceFrameworkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
