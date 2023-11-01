import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkDomainFormComponent } from './framework-domain-form.component';

describe('FrameworkDomainFormComponent', () => {
  let component: FrameworkDomainFormComponent;
  let fixture: ComponentFixture<FrameworkDomainFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkDomainFormComponent]
    });
    fixture = TestBed.createComponent(FrameworkDomainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
