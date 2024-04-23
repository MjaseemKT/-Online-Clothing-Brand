import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeggingsComponent } from './leggings.component';

describe('LeggingsComponent', () => {
  let component: LeggingsComponent;
  let fixture: ComponentFixture<LeggingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeggingsComponent]
    });
    fixture = TestBed.createComponent(LeggingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
