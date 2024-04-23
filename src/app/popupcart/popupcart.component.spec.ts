import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcartComponent } from './popupcart.component';

describe('PopupcartComponent', () => {
  let component: PopupcartComponent;
  let fixture: ComponentFixture<PopupcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupcartComponent]
    });
    fixture = TestBed.createComponent(PopupcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
