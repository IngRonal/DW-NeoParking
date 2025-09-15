import { Injectable } from '@angular/core';
import { ClientI } from '../../models/client';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class Client {
   private clientsService = new BehaviorSubject<ClientI[]>([
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St',
      phone: '555-1234',
      email: 'john@example.com',
      status: 'ACTIVE'
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: '456 Elm St',
      phone: '555-5678',
      email: 'jane@example.com',
      status: 'INACTIVE'
    }
  ]);

  clients$ = this.clientsService.asObservable();

  constructor() {}

  getClients(): ClientI[] {
    return this.clientsService.value;
  }

  addClient(client: ClientI): void {
    const clients = this.clientsService.value;
    client.id = clients.length ? Math.max(...clients.map(c => c.id ?? 0)) + 1 : 1;
    this.clientsService.next([...clients, client]);
  }
}
