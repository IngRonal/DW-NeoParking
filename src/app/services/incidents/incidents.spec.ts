import { TestBed } from '@angular/core/testing';

import { Incidents } from './incidents';
import { IncidentsI } from '../../models/incidents';

describe('Incidents', () => {
  let incidenciaService: Incidents;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Incidents]
    });
    incidenciaService = TestBed.inject(Incidents);
  });

  it('should be created', () => {
    expect(incidenciaService).toBeTruthy();
  });

  it('should return initial incidencias', (done) => {
    incidenciaService.getIncidencias().subscribe(incidencias => {
      expect(incidencias.length).toBe(2);
      expect(incidencias[0].estado).toBe('pendiente');
      expect(incidencias[0].descripcion).toBe('Ticket no emitido correctamente');
      expect(incidencias[1].estado).toBe('resuelto');
      done();
    });
  });

  it('should add a new incidencia', (done) => {
    const newIncidencia: IncidentsI = {
      id_ticket: 102,
      descripcion: 'Problema en plaza de parqueo',
      fecha: '2025-09-15',
      estado: 'pendiente'
    };

    incidenciaService.addIncidencia(newIncidencia);

    incidenciaService.getIncidencias().subscribe(incidencias => {
      expect(incidencias.length).toBe(3);
      const added = incidencias.find(i => i.descripcion === 'Problema en plaza de parqueo');
      expect(added).toBeTruthy();
      expect(added?.estado).toBe('pendiente');
      expect(added?.id_ticket).toBe(102);
      done();
    });
  });
});
