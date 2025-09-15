import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaymentI } from '../../models/payments';

@Injectable({
  providedIn: 'root'
})
export class Payments {
 private paymentsService = new BehaviorSubject<PaymentI[]>([
    {
      id_pago: 1,
      clientName: 'Juan Pérez',
      typeSuscripcion: 'Mensual',
      metodo_pago: 'Efectivo',
      fecha_pago: '2025-09-01',
      monto: 50000
    },
    {
      id_pago: 2,
      clientName: 'Ana Gómez',
      typeSuscripcion: 'Anual',
      metodo_pago: 'Tarjeta',
      fecha_pago: '2024-01-01',
      monto: 500000
    }
  ]);

  payments$ = this.paymentsService.asObservable();

  constructor() {}

  getPayments(): Observable<PaymentI[]> {
    return this.payments$;
  }

  addPayment(payment: PaymentI): void {
    const payments = this.paymentsService.value;

    payment.id_pago = payments.length
      ? Math.max(...payments.map(p => p.id_pago ?? 0)) + 1
      : 1;

    this.paymentsService.next([...payments, payment]);
  }
}
