import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { IncidentsI } from '../../../models/incidents';
import { Incidents } from '../../../services/incidents/incidents';


@Component({
  selector: 'app-get-allincidents',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allincidents.html',
  styleUrl: './get-allincidents.css'
})
export class GetAllincidents {
incidencias: IncidentsI[] = [];

  constructor(private incidenciaService: Incidents) {
    this.incidenciaService.incidencias$.subscribe(incidencias => {
      this.incidencias = incidencias;
    });
  }
}
