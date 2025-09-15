import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TicketI } from '../../models/issuance_ticket';

@Injectable({
  providedIn: 'root'
})
export class IssuanceTicketService {
  private ticketsService = new BehaviorSubject<TicketI[]>([
    {
      id: 1,
      clientId: 1,
      vehicleId: 1,
      vehiclePlate: 'ABC-123',
      subscriptionType: 'Mensual',
      date: '2025-09-14',
      status: 'Pagado',
      plazaName: 'Plaza Central',
      parkingName: 'Parking A',
      vehicleType: 'Carro',
      rate: 100000,
      timeIn: '08:00',
    },
    {
      id: 2,
      clientName: 'Juan Pérez',
      clientDocument: '123456789',
      vehiclePlate: 'ABC-123',
      subscriptionType: 'Hora',
      date: '2025-09-13',
      status: 'Pendiente',
      plazaName: 'Plaza Norte',
      parkingName: 'Parking B',
      vehicleType: 'Moto',
      rate: 250000,
      timeIn: '10:30',
    }
  ]);

  tickets$ = this.ticketsService.asObservable();

  constructor() {}

  getTickets(): TicketI[] {
    return this.ticketsService.value;
  }

  addTicket(ticket: TicketI): void {
    const tickets = this.ticketsService.value;

    // Asignar ID automáticamente
    ticket.id = tickets.length
      ? Math.max(...tickets.map(t => t.id ?? 0)) + 1
      : 1;

    // Valores por defecto
    ticket.date = ticket.date ?? new Date().toISOString().split('T')[0];
    ticket.status = ticket.status ?? 'Pendiente';
    ticket.subscriptionType = ticket.subscriptionType ?? 'Hora';
    ticket.vehicleType = ticket.vehicleType ?? 'Carro';
    ticket.rate = ticket.rate ?? 300000;
    ticket.plazaName = ticket.plazaName ?? 'Desconocida';
    ticket.parkingName = ticket.parkingName ?? 'Desconocido';

    this.ticketsService.next([...tickets, ticket]);
  }
}
