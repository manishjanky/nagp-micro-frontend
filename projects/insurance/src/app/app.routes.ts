import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {
  InsuranceDetailsComponent,
  InsuranceOfferingsComponent,
} from './components';

export const routes: Routes = [
  {
    path: '',
    component: InsuranceOfferingsComponent,
  },
  {
    path: 'my-insurance',
    component: InsuranceDetailsComponent,
  },
];
