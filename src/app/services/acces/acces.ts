import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccessI } from '../../models/acces';

@Injectable({
  providedIn: 'root'
})
export class Acces {
   private accessService = new BehaviorSubject<AccessI[]>([
    {
      id: 1,
      clientName: 'Juan Pérez',
      vehicleType: 'Carro',
      vehiclePlate: 'ABC123',
      parkingName: 'Parqueadero Central',
      timeIn: '2025-09-14T08:30:00',
      timeOut: '2025-09-14T10:15:00'
    },
    {
      id: 2,
      clientName: 'María Gómez',
      vehicleType: 'Moto',
      vehiclePlate: 'XYZ456',
      parkingName: 'Parqueadero Norte',
      timeIn: '2025-09-14T09:00:00'
      // sin timeOut porque sigue adentro
    }
  ]);

  access$ = this.accessService.asObservable();

  constructor() {}

  // 📌 Obtener todos los accesos
  getAccesses(): Observable<AccessI[]> {
    return this.access$;
  }

  // 📌 Agregar un acceso
  addAccess(access: AccessI): void {
    const accesses = this.accessService.value;
    access.id = accesses.length
      ? Math.max(...accesses.map(a => a.id ?? 0)) + 1
      : 1;

    this.accessService.next([...accesses, access]);
  }

  // 📌 Actualizar un acceso (ej: registrar hora de salida)
  updateAccess(updatedAccess: AccessI): void {
    const accesses = this.accessService.value.map(access =>
      access.id === updatedAccess.id ? { ...access, ...updatedAccess } : access
    );
    this.accessService.next(accesses);
  }

  // 📌 Eliminar un acceso
  deleteAccess(id: number): void {
    const accesses = this.accessService.value.filter(access => access.id !== id);
    this.accessService.next(accesses);
  }
}
