import { Component, OnInit } from '@angular/core';
import { insurances } from '../../data/insurances';
import { MfeBridgeService } from '@libs/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.scss'],
})
export class InsuranceDetailsComponent implements OnInit {
  details: any;

  constructor(
    private bridgeService: MfeBridgeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.details =
      insurances[Math.floor(Math.random() * (insurances.length - 0) + 0)];
  }

  renew() {
    const paymentId = new Date().getTime().toString();
    this.bridgeService.renewInsurance(paymentId, this.details);
    this.router.navigate(['/payment', paymentId]);
  }
}
