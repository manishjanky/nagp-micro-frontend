import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { asyncScheduler } from 'rxjs';
import { PaymentService } from '../../services';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss'],
})
export class CreditCardFormComponent {
  @Input() amount!: number;

  paymentSuccess = false;
  constructor(
    private fromBuilder: FormBuilder,
    private paymentService: PaymentService
  ) {}

  creditCardForm = this.fromBuilder.group({
    name: ['', [Validators.required]],
    cardNumber: ['', [Validators.required]],
    expirationDate: ['', [Validators.required]],
    cvv: ['', [Validators.required]],
  });

  onSubmit() {
    this.creditCardForm.markAllAsTouched();
    if (this.creditCardForm.valid) {
      this.creditCardForm.disable();
      console.log(this.creditCardForm.getRawValue());
      setTimeout(() => {
        this.paymentSuccess = true;
        this.paymentService.completePayment();
      }, 1000);
    }
  }
}
