import { TestBed } from '@angular/core/testing';
import { AccessI } from '../../models/acces';
import { Acces } from './acces';

describe('Acces', () => {
    let accessService: Acces;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    accessService = TestBed.inject(Acces);
  });

  it('should be created', () => {
    expect(accessService).toBeTruthy();
  });

  it('should return initial accesses', (done) => {
    accessService.getAccesses().subscribe(accesses => {
      expect(accesses.length).toBe(2);
      expect(accesses[0].clientName).toBe('Juan Pérez');
      expect(accesses[0].vehicleType).toBe('Carro');
      expect(accesses[1].timeOut).toBeUndefined(); // el segundo no tiene salida
      done();
    });
  });

  it('should add an access', () => {
    const newAccess: AccessI = {
      clientName: 'Carlos Ruiz',
      vehicleType: 'Bici',
      vehiclePlate: 'BIKE789',
      parkingName: 'Parqueadero Sur',
      timeIn: '2025-09-14T11:00:00'
    };

    accessService.addAccess(newAccess);

    accessService.getAccesses().subscribe(accesses => {
      expect(accesses.length).toBe(3);
      expect(accesses.some(a => a.clientName === 'Carlos Ruiz')).toBeTrue();
      expect(accesses.find(a => a.clientName === 'Carlos Ruiz')?.vehiclePlate).toBe('BIKE789');
    });
  });

  it('should update an access (add timeOut)', () => {
    const updatedAccess: AccessI = {
      id: 1,
      clientName: 'Juan Pérez',
      vehicleType: 'Carro',
      vehiclePlate: 'ABC123',
      parkingName: 'Parqueadero Central',
      timeIn: '2025-09-14T08:30:00',
      timeOut: '2025-09-14T12:00:00'
    };

    accessService.updateAccess(updatedAccess);

    accessService.getAccesses().subscribe(accesses => {
      const access = accesses.find(a => a.id === 1);
      expect(access?.timeOut).toBe('2025-09-14T12:00:00');
    });
  });

  it('should delete an access', () => {
    accessService.deleteAccess(1);

    accessService.getAccesses().subscribe(accesses => {
      expect(accesses.length).toBe(1);
      expect(accesses.some(a => a.id === 1)).toBeFalse();
    });
  });
});
