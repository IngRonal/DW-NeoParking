import { TestBed } from '@angular/core/testing';
import { DepositI } from '../../models/deposit';
import { Deposit } from './deposit';

describe('Deposit', () => {
  let depositService: Deposit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    depositService = TestBed.inject(Deposit);
  });

  it('should be created', () => {
    expect(depositService).toBeTruthy();
  });

  it('should return initial deposits', () => {
    const deposits = depositService.getDeposits();
    expect(deposits.length).toBe(2);
    expect(deposits[0].monto).toBe(50000);
    expect(deposits[0].id_suscripcion).toBe(1);
  });

  it('should add a deposit', () => {
    const newDeposit: DepositI = {
      id_suscripcion: 1,
      monto: 100000,
      fecha: '2025-09-15'
    };

    depositService.addDeposit(newDeposit);
    const deposits = depositService.getDeposits();

    expect(deposits.length).toBe(3);
    expect(deposits.some(d => d.monto === 100000 && d.id_suscripcion === 1)).toBeTrue();
  });

  it('should get deposits by subscription id', () => {
    const deposits = depositService.getDepositsBySubscription(1);
    expect(deposits.length).toBeGreaterThan(0);
    expect(deposits.every(d => d.id_suscripcion === 1)).toBeTrue();
  });
});
