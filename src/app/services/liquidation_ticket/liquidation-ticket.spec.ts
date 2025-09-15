import { TestBed } from '@angular/core/testing';
import {  LiquidationTicketService} from './liquidation-ticket';
import { TicketII } from '../../models/ticket_liquidation';

describe('LiquidationTicket', () => {
    let ticketService: LiquidationTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    ticketService = TestBed.inject(LiquidationTicketService);
  });

  it('should be created', () => {
    expect(ticketService).toBeTruthy();
  });

  it('should return initial tickets', (done) => {
    ticketService.getTickets().subscribe(tickets => {
      expect(tickets.length).toBe(2);
      expect(tickets[0].vehicleType).toBe('Carro');
      expect(tickets[0].status).toBe('Pago');
      done();
    });
  });

  it('should add a ticket', (done) => {
    const newTicket: TicketII = {
      ticketId: 103,
      rate: 4000,
      ticketTime: '2025-09-15T09:00:00',
      vehicleType: 'Bici',
      VehiclePlate: 'LMN789',
      status: 'Pendiente',
      amount: 0
    };

    ticketService.addTicket(newTicket);

    ticketService.getTickets().subscribe(tickets => {
      expect(tickets.length).toBe(3);
      expect(tickets.some(t => t.VehiclePlate === 'LMN789')).toBeTrue();
      expect(tickets.find(t => t.VehiclePlate === 'LMN789')?.vehicleType).toBe('Bici');
      done();
    });
  });

  it('should update ticket status', (done) => {
    ticketService.updateTicketStatus(2, 'Pago', 3000);

    ticketService.getTickets().subscribe(tickets => {
      const updatedTicket = tickets.find(t => t.id === 2);
      expect(updatedTicket?.status).toBe('Pago');
      expect(updatedTicket?.amount).toBe(3000);
      done();
    });
  });
});
