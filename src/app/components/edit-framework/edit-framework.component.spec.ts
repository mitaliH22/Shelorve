import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFrameworkComponent } from './edit-framework.component';

describe('EditFrameworkComponent', () => {
  let component: EditFrameworkComponent;
  let fixture: ComponentFixture<EditFrameworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFrameworkComponent]
    });
    fixture = TestBed.createComponent(EditFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
