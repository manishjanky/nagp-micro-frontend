import { Injectable } from '@angular/core';
import { InsuranceProduct, PaymentRequest } from '../models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MfeBridgeService {
  private initPaymentRequest$ = new BehaviorSubject<PaymentRequest>(
    {} as PaymentRequest
  );

  constructor() {}

  getPaymentRequest(): Observable<PaymentRequest> {
    return this.initPaymentRequest$
      .asObservable()
      .pipe(filter((paymentRequest) => Boolean(paymentRequest)));
  }

  buyInsurance(paymentId: string, item: InsuranceProduct) {
    this.initPaymentRequest$.next({
      amount: item.premium,
      paymentId,
      description: `${item.company}'s ${item.category} ${item.type} Insurance`,
    });
  }

  renewInsurance(paymentId: string, item: any) {
    this.initPaymentRequest$.next({
      amount: item.premium,
      paymentId,
      policyNumber: item.policyNumber,
      description: `${item.company}'s ${item.category} ${item.type} Insurance`,
    });
  }
}
