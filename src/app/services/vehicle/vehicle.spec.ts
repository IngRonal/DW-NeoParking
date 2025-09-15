import { TestBed } from '@angular/core/testing';
import { Vehicle } from './vehicle';
import { VehicleI } from '../../models/vehicle';

describe('Vehicle', () => {
  let vehicleService: Vehicle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    vehicleService = TestBed.inject(Vehicle);
  });

  it('should be created', () => {
    expect(vehicleService).toBeTruthy();
  });

  it('should return initial vehicles', () => {
    const vehicles = vehicleService.getVehicles();
    expect(vehicles.length).toBe(2);
    expect(vehicles[0].plate).toBe('ABC123');
  });

  it('should add a vehicle', () => {
    const newVehicle: VehicleI = {
      plate: 'DEF456',
      type: 'bici',
      color: 'Azul',
      brand: 'Trek',
      client_id: 1
    };

    vehicleService.addVehicle(newVehicle);
    const vehicles = vehicleService.getVehicles();

    expect(vehicles.length).toBe(3);
    expect(vehicles.some(v => v.plate === 'DEF456')).toBeTrue();
  });
});
