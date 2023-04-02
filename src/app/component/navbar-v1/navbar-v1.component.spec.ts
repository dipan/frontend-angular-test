import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarV1Component } from './navbar-v1.component';

describe('NavbarV1Component', () => {
  let component: NavbarV1Component;
  let fixture: ComponentFixture<NavbarV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
