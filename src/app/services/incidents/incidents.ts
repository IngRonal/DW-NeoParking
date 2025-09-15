import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IncidentsI } from '../../models/incidents';

@Injectable({
  providedIn: 'root'
})
export class Incidents {
  private incidenciasService = new BehaviorSubject<IncidentsI[]>([
    {
      id_incidencia: 1,
      id_ticket: 101,
      descripcion: 'Ticket no emitido correctamente',
      fecha: '2025-09-14',
      estado: 'pendiente'
    },
    {
      id_incidencia: 2,
      id_plaza: 5,
      descripcion: 'Plaza bloqueada por mantenimiento',
      fecha: '2025-09-12',
      estado: 'resuelto'
    }
  ]);

  incidencias$ = this.incidenciasService.asObservable();

  constructor() {}

  // Obtener todas las incidencias
  getIncidencias(): Observable<IncidentsI[]> {
    return this.incidencias$;
  }

  // Agregar nueva incidencia
  addIncidencia(incidencia: IncidentsI): void {
    const incidencias = this.incidenciasService.value;
    incidencia.id_incidencia = incidencias.length
      ? Math.max(...incidencias.map(i => i.id_incidencia ?? 0)) + 1
      : 1;

    this.incidenciasService.next([...incidencias, incidencia]);
  }

  // Opcional: filtrar por estado
  getIncidenciasPorEstado(estado: 'pendiente' | 'resuelto'): IncidentsI[] {
    return this.incidenciasService.value.filter(i => i.estado === estado);
  }
}
