import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkDomainUploadComponent } from './framework-domain-upload.component';

describe('FrameworkDomainUploadComponent', () => {
  let component: FrameworkDomainUploadComponent;
  let fixture: ComponentFixture<FrameworkDomainUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkDomainUploadComponent]
    });
    fixture = TestBed.createComponent(FrameworkDomainUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
