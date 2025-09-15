import { TestBed } from '@angular/core/testing';
import { Parking } from './parking';
import { ParkingI } from '../../models/parking';

describe('ParkingService', () => {
  let parking: Parking;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    parking = TestBed.inject(Parking);
  });

  it('should be created', () => {
    expect(parking).toBeTruthy();
  });

  it('should return initial parkings', () => {
    const parkings = parking.getParkings();
    expect(parkings.length).toBe(2);
    expect(parkings[0].name).toBe('Central Parking');
  });

  it('should add a parking', () => {
    const newParking: ParkingI = {
      name: 'East Parking',
      address: '789 East St',
      totalCapacity: 40,
      status: 'ACTIVE'
    };

    parking.addParking(newParking);
    const parkings = parking.getParkings();

    expect(parkings.length).toBe(3);
    expect(parkings.some(p => p.name === 'East Parking')).toBeTrue();
  });
});

