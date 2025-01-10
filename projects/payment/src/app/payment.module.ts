import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './components/payment/payment.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CreditCardFormComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentComponent, CreditCardFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class PaymentModule {}
