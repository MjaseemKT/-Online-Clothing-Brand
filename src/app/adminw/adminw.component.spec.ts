import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwComponent } from './adminw.component';

describe('AdminwComponent', () => {
  let component: AdminwComponent;
  let fixture: ComponentFixture<AdminwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminwComponent]
    });
    fixture = TestBed.createComponent(AdminwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
