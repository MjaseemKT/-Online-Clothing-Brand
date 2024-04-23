import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupwishComponent } from './popupwish.component';

describe('PopupwishComponent', () => {
  let component: PopupwishComponent;
  let fixture: ComponentFixture<PopupwishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupwishComponent]
    });
    fixture = TestBed.createComponent(PopupwishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
