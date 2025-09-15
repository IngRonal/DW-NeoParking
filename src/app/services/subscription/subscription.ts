import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubscriptionI } from '../../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class Subscription {
 private subscriptionsService = new BehaviorSubject<SubscriptionI[]>([
    {
      id: 1,
      clientId: 1,
      type: 'Mensual',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      status: 'Activa',
      vehicleIds: [1],
      price: 50000 
    },
    {
      id: 2,
      clientId: 2,
      type: 'Anual',
      startDate: '2025-01-01',
      endDate: '2025-12-31',
      status: 'Vencida',
      vehicleIds: [2],
      price: 500000
    }
  ]);

  subscriptions$ = this.subscriptionsService.asObservable();

  constructor() {}

  getSubscriptions(): Observable<SubscriptionI[]> {
    return this.subscriptions$;
  }

  addSubscription(subscription: SubscriptionI): void {
    const subscriptions = this.subscriptionsService.value;
    subscription.id = subscriptions.length
      ? Math.max(...subscriptions.map(s => s.id ?? 0)) + 1
      : 1;

    // ✅ Aseguramos vehicleIds
    if (!subscription.vehicleIds) {
      subscription.vehicleIds = [];
    }


    this.subscriptionsService.next([...subscriptions, subscription]);
  }
}
