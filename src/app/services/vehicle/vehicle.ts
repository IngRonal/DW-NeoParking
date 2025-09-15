import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VehicleI } from '../../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class Vehicle {
  private vehiclesService = new BehaviorSubject<VehicleI[]>([
    {
      id: 1,
      plate: 'ABC123',
      type: 'carro',
      color: 'Rojo',
      brand: 'Toyota',
      client_id: 1
    },
    {
      id: 2,
      plate: 'XYZ789',
      type: 'moto',
      color: 'Negro',
      brand: 'Yamaha',
      client_id: 2
    }
  ]);

  vehicles$ = this.vehiclesService.asObservable();

  constructor() {}

  getVehicles(): VehicleI[] {
    return this.vehiclesService.value;
  }

  addVehicle(vehicle: VehicleI): void {
    const vehicles = this.vehiclesService.value;
    vehicle.id = vehicles.length ? Math.max(...vehicles.map(v => v.id ?? 0)) + 1 : 1;
    this.vehiclesService.next([...vehicles, vehicle]);
  }
}
