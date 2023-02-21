import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEmptyComponent } from './banner-empty.component';

describe('BannerEmptyComponent', () => {
  let component: BannerEmptyComponent;
  let fixture: ComponentFixture<BannerEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
