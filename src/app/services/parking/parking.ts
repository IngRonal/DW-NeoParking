import { Injectable } from '@angular/core';
import { ParkingI } from '../../models/parking';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Parking {
  private parkingsService = new BehaviorSubject<ParkingI[]>([
    {
      id: 1,
      name: 'Central Parking',
      address: '123 Main St',
      totalCapacity: 50,
      status: 'ACTIVE'
    },
    {
      id: 2,
      name: 'North Parking',
      address: '456 North St',
      totalCapacity: 30,
      status: 'INACTIVE'
    }
  ]);

  parkings$ = this.parkingsService.asObservable();

  constructor() {}

  getParkings(): ParkingI[] {
    return this.parkingsService.value;
  }

  addParking(parking: ParkingI): void {
    const parkings = this.parkingsService.value;
    parking.id = parkings.length ? Math.max(...parkings.map(p => p.id ?? 0)) + 1 : 1;
    this.parkingsService.next([...parkings, parking]);
  }
}
