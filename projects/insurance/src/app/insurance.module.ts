import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import {
  InsuranceDetailsComponent,
  InsuranceOfferingsComponent,
  InsuranceOfferingsItemComponent,
} from './components';

@NgModule({
  declarations: [
    InsuranceOfferingsComponent,
    InsuranceOfferingsItemComponent,
    InsuranceDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class InsuranceModule {}
