import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerV2Component } from './spinner-v2.component';

describe('SpinnerV2Component', () => {
  let component: SpinnerV2Component;
  let fixture: ComponentFixture<SpinnerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
