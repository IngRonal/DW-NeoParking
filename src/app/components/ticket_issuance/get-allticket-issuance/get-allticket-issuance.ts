import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';

import { TicketI } from '../../../models/issuance_ticket';
import { IssuanceTicketService } from '../../../services/issuance_ticket/issuance-ticket';
import { ClientI } from '../../../models/client';
import { Client } from '../../../services/client/client';
import { Parking } from '../../../services/parking/parking';
import { Square } from '../../../services/square/square';
import { Rate } from '../../../services/rate/rate';
import { ParkingI } from '../../../models/parking';
import { SquareI } from '../../../models/squares';
import { RateI } from '../../../models/rates';
import { Vehicle } from '../../../services/vehicle/vehicle';
import { VehicleI } from '../../../models/vehicle';

@Component({
  selector: 'app-get-allticket-issuance',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allticket-issuance.html',
  styleUrls: ['./get-allticket-issuance.css']
})
export class GetAllticketIssuance {
  
  ticketsWithSubscription: TicketI[] = [];
  ticketsParticulars: TicketI[] = [];
  clients: ClientI[] = [];
  parkings: ParkingI[] = [];
  plazas: SquareI[] = [];
  rates: RateI[] = [];
  vehicle: VehicleI[] = [];
  showTable: 'subscription' | 'particular' = 'subscription';
  constructor(
    private ticketService: IssuanceTicketService,
    private clientService: Client,
    private parkingService: Parking,
    private plazaService: Square,
    private rateService: Rate
  ) {
    combineLatest([
      this.ticketService.tickets$,
      this.clientService.clients$,
      this.parkingService.parkings$,
      this.plazaService.squares$,
      this.rateService.rates$
    ]).subscribe(([tickets, clients, parkings, plazas, rates]) => {
      this.clients = clients;
      this.parkings = parkings;
      this.plazas = plazas;
      this.rates = rates;

      // Tickets de suscripción (clientes registrados)
      this.ticketsWithSubscription = tickets
        .filter(t => t.clientId !== undefined)
        .map(t => ({
          ...t,
          clientName: this.clients.find(c => c.id === t.clientId)?.name || 'Desconocido',
          vehiclePlate: t.vehiclePlate || t.vehiclePlate || '-',
          vehicleType: t.vehicleType || 'Carro',
          parkingName: t.parkingName || t.parkingName || '-',
          plazaNumber: t.plazaName || t.plazaName || '-',
          rate: t.rate || t.rate,
          timeIn: t.timeIn || '-'
        }));

      // Tickets de clientes particulares (no registrados)
      this.ticketsParticulars = tickets
        .filter(t => t.clientId === undefined)
        .map(t => ({
          ...t,
          clientName: t.clientName || 'Desconocido',
          clientDocument: t.clientDocument || t.clientDocument || '-',
          vehiclePlate: t.vehiclePlate || t.vehiclePlate || '-',
          vehicleType: t.vehicleType || 'Carro',
          parkingName: t.parkingName || t.parkingName || '-',
          plazaNumber: t.plazaName || t.plazaName || '-',
          rate: t.rate || t.rate,
          timeIn: t.timeIn || '-'
        }));
    });
  }

  // Función para imprimir un ticket
  printTicket(ticket: TicketI) {
    const ticketWindow = window.open('', '_blank');
    if (!ticketWindow) return;

    ticketWindow.document.write(`
      <html>
        <head>
          <title>Ticket #${ticket.id}</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet">
          <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
          <style>
            body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; }
            .ticket { width: 320px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .divider { border-top: 1px dashed #999; margin: 10px 0; }
            .barcode { text-align: center; margin-top: 15px; }
            .logo-icon { font-size: 48px; color: #4f46e5; }
            .field-label { font-weight: 600; }
          </style>
        </head>
        <body class="bg-gray-100 flex justify-center items-center min-h-screen">
          <div class="ticket">
            <div class="text-center">
              <i class="pi pi-car logo-icon mx-auto mb-2"></i>
              <h2 class="font-bold text-lg">Parking Receipt</h2>
              <p class="text-sm text-gray-600">${new Date(ticket.date).toLocaleDateString()}</p>
            </div>

            <div class="divider"></div>

            <div class="text-sm space-y-1">
              <p><span class="field-label">Cliente:</span> ${ticket.clientName || 'Desconocido'}</p>
              <p><span class="field-label">Documento:</span> ${ticket.clientDocument || '-'}</p>
              <p><span class="field-label">Vehículo:</span> ${ticket.vehicleType || '-'}</p>
              <p><span class="field-label">Parqueadero:</span> ${ticket.parkingName || '-'}</p>
              <p><span class="field-label">Plaza:</span> ${ticket.plazaName || '-'}</p>
              <p><span class="field-label">Tipo Suscripción:</span> ${ticket.subscriptionType || '-'}</p>
              <p><span class="field-label">Hora de entrada:</span> ${ticket.timeIn}</p>
              <p><span class="field-label">Tarifa:</span> $${ticket.rate?.toLocaleString() || 0}</p>
              <p><span class="field-label">Estado:</span> ${ticket.status}</p>
            </div>

            <div class="divider"></div>

            <div class="barcode">
              <svg id="barcode"></svg>
            </div>

            <div class="text-center text-gray-500 text-xs mt-2">
              ¡Gracias por su preferencia!
            </div>
          </div>

          <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
          <script>
            JsBarcode("#barcode", "${ticket.id}", {
              format: "CODE128",
              lineColor: "#000",
              width: 2,
              height: 40,
              displayValue: false
            });
            window.print();
          </script>
        </body>
      </html>
    `);

    ticketWindow.document.close();
  }
}
