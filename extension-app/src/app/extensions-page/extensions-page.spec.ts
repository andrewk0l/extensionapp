import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsPage } from './extensions-page';

describe('ExtensionsPage', () => {
  let component: ExtensionsPage;
  let fixture: ComponentFixture<ExtensionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
