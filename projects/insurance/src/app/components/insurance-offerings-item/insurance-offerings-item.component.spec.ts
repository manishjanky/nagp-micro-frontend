import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceOfferingsItemComponent } from './insurance-offerings-item.component';

describe('InsuranceOfferingsItemComponent', () => {
  let component: InsuranceOfferingsItemComponent;
  let fixture: ComponentFixture<InsuranceOfferingsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceOfferingsItemComponent]
    });
    fixture = TestBed.createComponent(InsuranceOfferingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
