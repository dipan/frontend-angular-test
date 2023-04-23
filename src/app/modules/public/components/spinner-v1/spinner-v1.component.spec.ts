import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerV1Component } from './spinner-v1.component';

describe('SpinnerV1Component', () => {
  let component: SpinnerV1Component;
  let fixture: ComponentFixture<SpinnerV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
