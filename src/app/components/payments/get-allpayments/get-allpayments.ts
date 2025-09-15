import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PaymentI } from '../../../models/payments';
import { Payments } from '../../../services/payments/payments';

@Component({
  selector: 'app-get-allpayments',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allpayments.html',
  styleUrl: './get-allpayments.css'
})
export class GetAllpayments {
payments: PaymentI[] = [];

  constructor(private paymentService: Payments) {
    this.paymentService.payments$.subscribe(payments => {
      this.payments = payments;
    });
  }
}
