import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceProduct, MfeBridgeService } from '@libs/shared';

@Injectable({
  providedIn: 'root',
})
export class InsuranceService {
  constructor(private mfeBridge: MfeBridgeService, private router: Router) {}

  buy(item: InsuranceProduct) {
    const paymentId = new Date().getTime().toString();
    this.mfeBridge.buyInsurance(paymentId, item);
    this.router.navigate(['/payment', paymentId]);
  }
}
