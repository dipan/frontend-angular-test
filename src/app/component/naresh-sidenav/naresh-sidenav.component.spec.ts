import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NareshSidenavComponent } from './naresh-sidenav.component';

describe('NareshSidenavComponent', () => {
  let component: NareshSidenavComponent;
  let fixture: ComponentFixture<NareshSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NareshSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NareshSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
