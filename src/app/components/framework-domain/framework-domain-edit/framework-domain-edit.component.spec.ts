import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkDomainEditComponent } from './framework-domain-edit.component';

describe('FrameworkDomainEditComponent', () => {
  let component: FrameworkDomainEditComponent;
  let fixture: ComponentFixture<FrameworkDomainEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkDomainEditComponent]
    });
    fixture = TestBed.createComponent(FrameworkDomainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
