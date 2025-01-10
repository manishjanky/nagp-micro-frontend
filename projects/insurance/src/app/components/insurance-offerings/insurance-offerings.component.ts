import { Component } from '@angular/core';
import { insurances } from '../../data/products';

@Component({
  selector: 'app-insurance-offerings',
  templateUrl: './insurance-offerings.component.html',
  styleUrls: ['./insurance-offerings.component.scss'],
})
export class InsuranceOfferingsComponent {
  offerings = insurances;
}
