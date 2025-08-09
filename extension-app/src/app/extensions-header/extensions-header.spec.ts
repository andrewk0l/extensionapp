import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsHeader } from './extensions-header';

describe('ExtensionsHeader', () => {
  let component: ExtensionsHeader;
  let fixture: ComponentFixture<ExtensionsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
