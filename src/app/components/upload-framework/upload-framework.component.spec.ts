import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFrameworkComponent } from './upload-framework.component';

describe('UploadFrameworkComponent', () => {
  let component: UploadFrameworkComponent;
  let fixture: ComponentFixture<UploadFrameworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadFrameworkComponent]
    });
    fixture = TestBed.createComponent(UploadFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
