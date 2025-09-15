import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { TicketI } from '../../../models/issuance_ticket';
import { IssuanceTicketService } from '../../../services/issuance_ticket/issuance-ticket';
import { LiquidationTicketService } from '../../../services/liquidation_ticket/liquidation-ticket';
import { TicketII } from '../../../models/ticket_liquidation';


@Component({
  selector: 'app-createticket-liquidation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createticket-liquidation.html',
  styleUrls: ['./createticket-liquidation.css']
})
export class CreateticketLiquidation  {
 form: FormGroup;
  pendingTickets: TicketI[] = [];
  selectedTicket?: TicketI;
  calculatedAmount: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ticketService: IssuanceTicketService,
    private liquidationService: LiquidationTicketService
  ) {
    this.form = this.fb.group({
  clientName: [{ value: '', disabled: true }],
  vehiclePlate: [{ value: '', disabled: true }],
  timeIn: [{ value: '', disabled: true }],
  timeOut: [{ value: '', disabled: true }],
  hours: [{ value: '', disabled: true }],
  rate: [{ value: '', disabled: true }],
  amount: [{ value: '', disabled: true }],
  // otros campos que sí son editables
  ticketId: ['', Validators.required]
});

  }

  ngOnInit() {
    // Obtener solo tickets pendientes
    this.ticketService.tickets$.subscribe(tickets => {
      this.pendingTickets = tickets.filter(t => t.status === 'Pendiente');
    });
  }

  // Cuando selecciona un ticket
  onTicketChange(event: Event) {
    const ticketId = Number((event.target as HTMLSelectElement).value);
    this.selectedTicket = this.pendingTickets.find(t => t.id === ticketId);

    if (this.selectedTicket) {
      const now = new Date();
      const timeIn = new Date(`1970-01-01T${this.selectedTicket.timeIn}:00`);
      const diffHours = Math.max(1, Math.ceil((now.getTime() - timeIn.getTime()) / (1000 * 60 * 60)));

      this.calculatedAmount = diffHours * (this.selectedTicket.rate || 0);

      this.form.patchValue({
        clientName: this.selectedTicket.clientName || 'N/A',
        vehiclePlate: this.selectedTicket.vehiclePlate || 'N/A',
        timeIn: this.selectedTicket.timeIn,
        timeOut: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hours: diffHours,
        rate: this.selectedTicket.rate,
        amount: this.calculatedAmount
      });
    }
  }

  submit() {
  if (this.selectedTicket) {
    const now = new Date();

    const liquidation: TicketII = {
      id: 0, // el servicio le asigna el ID
      ticketId: this.selectedTicket.id!,
      rate: this.selectedTicket.rate || 0,
      ticketTime: new Date(`1970-01-01T${this.selectedTicket.timeIn}:00`).toISOString(),
      vehicleType: this.selectedTicket.vehicleType || 'Carro',
      VehiclePlate: this.selectedTicket.vehiclePlate || 'N/A',
      paymentTime: now.toISOString(),
      status: 'Pago',
      amount: this.calculatedAmount
    };

    // 👉 Guardamos en el servicio de liquidación
    this.liquidationService.addTicket(liquidation);

    // Navegar después de guardar
    this.router.navigate(['/ticket-liquidation']);
  }
}

  cancelar() {
    this.router.navigate(['/ticket-liquidation']);
  }

  get f() {
    return this.form.controls;
  }
}
