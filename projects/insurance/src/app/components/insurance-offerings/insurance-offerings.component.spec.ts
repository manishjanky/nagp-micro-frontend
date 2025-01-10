import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceOfferingsComponent } from './insurance-offerings.component';

describe('InsuranceOfferingsComponent', () => {
  let component: InsuranceOfferingsComponent;
  let fixture: ComponentFixture<InsuranceOfferingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceOfferingsComponent]
    });
    fixture = TestBed.createComponent(InsuranceOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
