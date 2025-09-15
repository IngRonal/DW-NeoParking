import { TestBed } from '@angular/core/testing';
import { PaymentI } from '../../models/payments';
import { Payments } from './payments';

describe('Payments', () => {
  let paymentService: Payments;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Payments]
    });
    paymentService = TestBed.inject(Payments);
  });

  it('should be created', () => {
    expect(paymentService).toBeTruthy();
  });

  it('should return initial payments', (done) => {
    paymentService.getPayments().subscribe(payments => {
      expect(payments.length).toBe(2);
      expect(payments[0].typeSuscripcion).toBe('Mensual');
      expect(payments[0].monto).toBe(50000); // ✅ verificamos monto
      expect(payments[0].metodo_pago).toBe('Efectivo'); // ✅ verificamos método de pago
      done();
    });
  });

  it('should add a payment', (done) => {
    const newPayment: PaymentI = {
      clientName: 'Carlos Ruiz',
      typeSuscripcion: 'Trimestral',
      metodo_pago: 'App',
      fecha_pago: '2025-05-01',
      monto: 150000
    };

    paymentService.addPayment(newPayment);

    paymentService.getPayments().subscribe(payments => {
      expect(payments.length).toBe(3);
      const trimestral = payments.find(p => p.typeSuscripcion === 'Trimestral');
      expect(trimestral).toBeTruthy();
      expect(trimestral?.monto).toBe(150000); // ✅ comprobamos monto
      expect(trimestral?.metodo_pago).toBe('App'); // ✅ comprobamos método de pago
      done();
    });
  });
});
