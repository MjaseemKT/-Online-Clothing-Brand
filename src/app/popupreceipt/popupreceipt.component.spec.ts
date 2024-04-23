import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupreceiptComponent } from './popupreceipt.component';

describe('PopupreceiptComponent', () => {
  let component: PopupreceiptComponent;
  let fixture: ComponentFixture<PopupreceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupreceiptComponent]
    });
    fixture = TestBed.createComponent(PopupreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
