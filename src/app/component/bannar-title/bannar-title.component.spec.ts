import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannarTitleComponent } from './bannar-title.component';

describe('BannarTitleComponent', () => {
  let component: BannarTitleComponent;
  let fixture: ComponentFixture<BannarTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannarTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
