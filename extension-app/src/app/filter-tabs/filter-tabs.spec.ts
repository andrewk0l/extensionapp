import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTabs } from './filter-tabs';

describe('FilterTabs', () => {
  let component: FilterTabs;
  let fixture: ComponentFixture<FilterTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
