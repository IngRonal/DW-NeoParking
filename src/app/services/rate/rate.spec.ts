import { TestBed } from '@angular/core/testing';
import { RateI } from '../../models/rates';
import { Rate } from './rate';

describe('Rates', () => {
 let rateService: Rate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    rateService = TestBed.inject(Rate);
  });

  it('should be created', () => {
    expect(rateService).toBeTruthy();
  });

  it('should return initial rates', () => {
    const rates = rateService.getRates();
    expect(rates.length).toBe(2);
    expect(rates[0].timeRange).toBe('Diurna');
  });

  it('should add a rate', () => {
    const newRate: RateI = {
      timeRange: 'Fin de semana',
      pricePerHour: 3000,
      pricePerDay: 20000
    };

    rateService.addRate(newRate);
    const rates = rateService.getRates();

    expect(rates.length).toBe(3);
    expect(rates.some(r => r.timeRange === 'Fin de semana')).toBeTrue();
  });
});
