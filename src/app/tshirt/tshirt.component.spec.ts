import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtComponent } from './tshirt.component';

describe('TshirtComponent', () => {
  let component: TshirtComponent;
  let fixture: ComponentFixture<TshirtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TshirtComponent]
    });
    fixture = TestBed.createComponent(TshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
