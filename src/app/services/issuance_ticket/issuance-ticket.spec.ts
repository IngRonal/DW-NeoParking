import { TestBed } from '@angular/core/testing';
import { TicketI } from '../../models/issuance_ticket';
import { IssuanceTicketService } from './issuance-ticket';

describe('IssuanceTicketService', () => {
  let ticketService: IssuanceTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    ticketService = TestBed.inject(IssuanceTicketService);
  });

  it('should be created', () => {
    expect(ticketService).toBeTruthy();
  });

  it('should return initial tickets', () => {
    const tickets = ticketService.getTickets();
    expect(tickets.length).toBe(2);

    // Revisar ticket de cliente registrado
    expect(tickets[0].subscriptionType).toBe('Mensual');
    expect(tickets[0].vehicleId).toBe(1);
    expect(tickets[0].plazaName).toBe('Plaza Central');
    expect(tickets[0].parkingName).toBe('Parking A');
    expect(tickets[0].vehicleType).toBe('Carro');
    expect(tickets[0].rate).toBe(100000);

    // Revisar ticket de cliente particular
    expect(tickets[1].clientName).toBe('Juan Pérez');
    expect(tickets[1].plazaName).toBe('Plaza Norte');
    expect(tickets[1].parkingName).toBe('Parking B');
    expect(tickets[1].vehicleType).toBe('Moto');
    expect(tickets[1].rate).toBe(250000);
  });

  it('should add a ticket with default values', () => {
    const newTicket: TicketI = {
      clientId: 3,
      vehicleId: 5,
      subscriptionType: 'Trimestral',
      rate: 300000,
      date: '2025-09-15',
      status: 'Pendiente'
      // plazaName, parkingName, vehicleType y rate se asignarán por defecto si no se envían
    };

    ticketService.addTicket(newTicket);
    const tickets = ticketService.getTickets();

    expect(tickets.length).toBe(3);
    const addedTicket = tickets.find(t => t.subscriptionType === 'Trimestral');
    expect(addedTicket).toBeTruthy();
    expect(addedTicket?.vehicleId).toBe(5);

    // Verificar que los valores por defecto se asignaron correctamente
    expect(addedTicket?.plazaName).toBe('Desconocida');
    expect(addedTicket?.parkingName).toBe('Desconocido');
    expect(addedTicket?.vehicleType).toBe('Carro');
    expect(addedTicket?.rate).toBe(300000);
  });
});
