import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarWithOptionComponent } from './search-bar-with-option.component';

describe('SearchBarWithOptionComponent', () => {
  let component: SearchBarWithOptionComponent;
  let fixture: ComponentFixture<SearchBarWithOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarWithOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarWithOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
