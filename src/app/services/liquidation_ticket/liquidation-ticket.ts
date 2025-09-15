import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TicketII } from '../../models/ticket_liquidation';

@Injectable({
  providedIn: 'root'
})
export class LiquidationTicketService {
 private ticketsService = new BehaviorSubject<TicketII[]>([
    {
      id: 1,
      ticketId: 101,
      rate: 5000,
      ticketTime: '2025-09-14T10:00:00',
      vehicleType: 'Carro',
      VehiclePlate: 'ABC123',
      paymentTime: '2025-09-14T11:00:00',
      status: 'Pago',
      amount: 5000
    }
  ]);

  tickets$ = this.ticketsService.asObservable();

  constructor() {}

  // Obtener todos los tickets
  getTickets(): Observable<TicketII[]> {
    return this.tickets$;
  }

  // Agregar un nuevo ticket
  addTicket(ticket: TicketII): void {
    const tickets = this.ticketsService.value;
    ticket.id = tickets.length
      ? Math.max(...tickets.map(t => t.id ?? 0)) + 1
      : 1;

    // Si está pagado y no tiene amount, asignar rate
    if (ticket.status === 'Pago' && !ticket.amount) {
      ticket.amount = ticket.rate;
    }

    this.ticketsService.next([...tickets, ticket]);
  }

  // Actualizar estado del ticket
  updateTicketStatus(ticketId: number, status: 'Pago' | 'Pendiente', amount?: number): void {
    const tickets = this.ticketsService.value.map(t =>
      t.id === ticketId
        ? { ...t, status, amount: amount ?? t.amount }
        : t
    );
    this.ticketsService.next(tickets);
  }
}
