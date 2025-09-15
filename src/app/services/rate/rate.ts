import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RateI } from '../../models/rates';

@Injectable({
  providedIn: 'root'
})
export class Rate {
private ratesService = new BehaviorSubject<RateI[]>([
    {
      id: 1,
      timeRange: 'Diurna',
      pricePerHour: 2000,
      pricePerDay: 15000
    },
    {
      id: 2,
      timeRange: 'Nocturna',
      pricePerHour: 2500,
      pricePerDay: 18000
    }
  ]);

  rates$ = this.ratesService.asObservable();

  constructor() {}

  getRates(): RateI[] {
    return this.ratesService.value;
  }

  addRate(rate: RateI): void {
    const rates = this.ratesService.value;
    rate.id = rates.length ? Math.max(...rates.map(r => r.id ?? 0)) + 1 : 1;
    this.ratesService.next([...rates, rate]);
  }
}
