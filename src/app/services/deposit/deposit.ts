import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DepositI } from '../../models/deposit';

@Injectable({
  providedIn: 'root'
})
export class Deposit {
   private depositsService = new BehaviorSubject<DepositI[]>([
    {
      id_abono: 1,
      id_suscripcion: 1,
      monto: 50000,
      fecha: '2025-09-14'
    },
    {
      id_abono: 2,
      id_suscripcion: 2,
      monto: 75000,
      fecha: '2025-09-13'
    }
  ]);

  deposits$ = this.depositsService.asObservable();

  constructor() {}

  getDeposits(): DepositI[] {
    return this.depositsService.value;
  }

  addDeposit(deposit: DepositI): void {
    const deposits = this.depositsService.value;
    deposit.id_abono = deposits.length ? Math.max(...deposits.map(d => d.id_abono ?? 0)) + 1 : 1;
    this.depositsService.next([...deposits, deposit]);
  }

  getDepositsBySubscription(id_suscripcion: number): DepositI[] {
    return this.depositsService.value.filter(d => d.id_suscripcion === id_suscripcion);
  }
}
