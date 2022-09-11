import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPurchasesComponent } from './show-purchases.component';

describe('ShowPurchacesComponent', () => {
  let component: ShowPurchasesComponent;
  let fixture: ComponentFixture<ShowPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
