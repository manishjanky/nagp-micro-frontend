import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MfeBridgeService, PaymentRequest } from '@libs/shared';
import { asyncScheduler, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private router: Router, private mfeBridge: MfeBridgeService) {}

  getPaymentRequest(): Observable<PaymentRequest> {
    return this.mfeBridge.getPaymentRequest();
  }

  canInitiatePayment(paymentId: string): Observable<boolean> {
    return this.getPaymentRequest().pipe(
      map((paymentRequest) => {
        if (paymentRequest?.paymentId === paymentId) {
          return true;
        } else {
          this.router.navigateByUrl('/');
          return false;
        }
      })
    );
  }

  completePayment() {
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 2000);
  }
}
