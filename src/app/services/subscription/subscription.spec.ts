import { TestBed } from '@angular/core/testing';
import { Subscription } from './subscription';
import { SubscriptionI } from '../../models/subscription';

describe('Subscription', () => {
  let subscriptionService: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Subscription]
    });
    subscriptionService = TestBed.inject(Subscription);
  });

  it('should be created', () => {
    expect(subscriptionService).toBeTruthy();
  });

  it('should return initial subscriptions', (done) => {
    subscriptionService.getSubscriptions().subscribe(subscriptions => {
      expect(subscriptions.length).toBe(2);
      expect(subscriptions[0].type).toBe('Mensual');
      expect(subscriptions[0].vehicleIds).toEqual([1]); // 👈 corregido
      expect(subscriptions[0].price).toBe(50000);       // 👈 ahora probamos el precio
      done();
    });
  });

  it('should add a subscription', (done) => {
    const newSubscription: SubscriptionI = {
      clientId: 3,
      type: 'Trimestral',
      startDate: '2025-02-01',
      endDate: '2025-04-30',
      status: 'Activa',
      vehicleIds: [4],
      price: 120000 // 👈 nuevo campo obligatorio
    };

    subscriptionService.addSubscription(newSubscription);

    subscriptionService.getSubscriptions().subscribe(subscriptions => {
      expect(subscriptions.length).toBe(3);
      const trimestral = subscriptions.find(s => s.type === 'Trimestral');
      expect(trimestral).toBeTruthy();
      expect(trimestral?.vehicleIds).toEqual([4]);
      expect(trimestral?.price).toBe(120000); // 👈 comprobamos el precio
      done();
    });
  });
});
