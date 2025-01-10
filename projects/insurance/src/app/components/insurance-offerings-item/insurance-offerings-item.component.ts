import { Component, Input } from '@angular/core';
import { InsuranceProduct } from '@libs/shared';
import { InsuranceService } from '../../services';

@Component({
  selector: 'app-insurance-offerings-item',
  templateUrl: './insurance-offerings-item.component.html',
  styleUrls: ['./insurance-offerings-item.component.scss'],
})
export class InsuranceOfferingsItemComponent {
  @Input() item!: InsuranceProduct;

  constructor(private insuranceService: InsuranceService) {}

  buy() {
    this.insuranceService.buy(this.item);
  }
}
