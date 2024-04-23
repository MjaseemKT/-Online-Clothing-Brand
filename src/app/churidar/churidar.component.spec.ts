import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuridarComponent } from './churidar.component';

describe('ChuridarComponent', () => {
  let component: ChuridarComponent;
  let fixture: ComponentFixture<ChuridarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChuridarComponent]
    });
    fixture = TestBed.createComponent(ChuridarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
