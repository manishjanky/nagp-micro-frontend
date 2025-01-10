import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaymentComponent } from './components';

export const routes: Routes = [
  {
    path: ':paymentId',
    component: PaymentComponent,
  },
];
