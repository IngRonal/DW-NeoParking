import { TestBed } from '@angular/core/testing';

import { Client } from './client';
import { ClientI } from '../../models/client';

describe('Client', () => {
let clientService: Client;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    clientService = TestBed.inject(Client);
  });

  it('should be created', () => {
    expect(clientService).toBeTruthy();
  });

  it('should return initial clients', () => {
    const clients = clientService.getClients();
    expect(clients.length).toBe(2);
    expect(clients[0].name).toBe('John Doe');
  });

  it('should add a client', () => {
    const newClient: ClientI = {
      name: 'Alice Brown',
      address: '789 Oak St',
      phone: '555-9999',
      email: 'alice@example.com',
      status: 'ACTIVE'
    };

    clientService.addClient(newClient);
    const clients = clientService.getClients();

    expect(clients.length).toBe(3);
    expect(clients.some(c => c.name === 'Alice Brown')).toBeTrue();
  });
});
