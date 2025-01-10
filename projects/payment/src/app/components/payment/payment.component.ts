import { Component } from '@angular/core';
import { filter, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { PaymentService } from '../../services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  showCreditCardForm!: boolean;
  amount!: number;

  canInitiatePayment$ = this.activatedRoute.params.pipe(
    filter((params) => Boolean(params['paymentId'])),
    switchMap((params) =>
      this.paymentService.canInitiatePayment(params['paymentId'])
    )
  );

  paymentRequest$ = this.paymentService.getPaymentRequest().pipe(
    tap((paymentRequest) => {
      this.amount = paymentRequest?.amount;
    })
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService
  ) {}
}
