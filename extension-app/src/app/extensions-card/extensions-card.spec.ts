import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsCard } from './extensions-card';

describe('ExtensionsCard', () => {
  let component: ExtensionsCard;
  let fixture: ComponentFixture<ExtensionsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
