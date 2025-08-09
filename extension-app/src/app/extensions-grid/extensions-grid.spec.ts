import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsGrid } from './extensions-grid';

describe('ExtensionsGrid', () => {
  let component: ExtensionsGrid;
  let fixture: ComponentFixture<ExtensionsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
