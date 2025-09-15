import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DepositI } from '../../../models/deposit';
import { Deposit } from '../../../services/deposit/deposit';

@Component({
  selector: 'app-get-alldeposit',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-alldeposit.html',
  styleUrl: './get-alldeposit.css'
})
export class GetAlldeposit {
deposits: DepositI[] = [];

  constructor(private deposit: Deposit) {
    // Suscribirse al observable para tener los depósitos actualizados
    this.deposit.deposits$.subscribe(deposits => {
      this.deposits = deposits;
    });
  }
}
