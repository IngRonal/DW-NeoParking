import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { IssuanceTicketService } from '../../../services/issuance_ticket/issuance-ticket';
import { Square } from '../../../services/square/square';
import { Incidents } from '../../../services/incidents/incidents';
import { IncidentsI } from '../../../models/incidents';

@Component({
  selector: 'app-createincidents',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createincidents.html',
  styleUrl: './createincidents.css'
})
export class Createincidents {
form: FormGroup;
  tickets: { id: number; nombre: string }[] = [];
  plazas: { id: number; nombre: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private incidenciaService: Incidents,
    private ticketService: IssuanceTicketService,
    private plazaService: Square
  ) {
    this.form = this.fb.group({
      id_ticket: [''],   // Opcional
      id_plaza: [''],    // Opcional
      descripcion: ['', Validators.required],
      fecha: [new Date().toISOString().substring(0, 10), Validators.required], // Fecha actual por defecto
      estado: ['pendiente', Validators.required]
    });
  }

  ngOnInit() {
  // Tickets desde la base de datos, solo con id definido
  this.ticketService.tickets$.subscribe(tickets => {
    this.tickets = tickets
      .filter(t => t.id !== undefined)
      .map(t => ({
        id: t.id!, 
        nombre: `Ticket #${t.id} - ${t.clientName || t.plazaName || 'Desconocido'}`
      }));
  });

  // Plazas desde la base de datos, solo con id definido
  this.plazaService.squares$.subscribe(squares => {
    this.plazas = squares
      .filter(s => s.id !== undefined)
      .map(s => ({
        id: s.id!,
        nombre: `Plaza ${s.number}` // ✅ nombre generado dinámicamente
      }));
  });
}


  submit() {
    if (this.form.valid) {
      const value = this.form.value;
      const nuevaIncidencia: IncidentsI = {
        id_ticket: value.id_ticket ? Number(value.id_ticket) : undefined,
        id_plaza: value.id_plaza ? Number(value.id_plaza) : undefined,
        descripcion: value.descripcion,
        fecha: value.fecha,
        estado: value.estado as 'pendiente' | 'resuelto'
      };
      this.incidenciaService.addIncidencia(nuevaIncidencia);
      this.router.navigate(['/incidents']);
    }
  }

  cancelar() {
    this.router.navigate(['/incidents']);
  }
}
