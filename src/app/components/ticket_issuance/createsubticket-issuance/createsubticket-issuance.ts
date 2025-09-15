import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { Client } from '../../../services/client/client';
import { ClientI } from '../../../models/client';
import { Vehicle } from '../../../services/vehicle/vehicle';
import { VehicleI } from '../../../models/vehicle';
import { TicketI } from '../../../models/issuance_ticket';
import { IssuanceTicketService } from '../../../services/issuance_ticket/issuance-ticket';
import { Square } from '../../../services/square/square';
import { Parking } from '../../../services/parking/parking';
import { Rate } from '../../../services/rate/rate';
import { Subscription } from '../../../services/subscription/subscription';
import { SubscriptionI } from '../../../models/subscription';

@Component({
  selector: 'app-createticket',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './createsubticket-issuance.html',
  styleUrls: ['./createsubticket-issuance.css']
})
export class CreatesubticketIssuance implements OnInit {
  subscriptionForm: FormGroup;
  particularForm: FormGroup;
  ticketType: 'subscription' | 'particular' = 'subscription';

  clients: ClientI[] = [];
  vehicles: VehicleI[] = [];
  filteredVehicles: VehicleI[] = [];
  subscriptions: SubscriptionI[] = [];

  plazas: { name: string; status: 'Libre' | 'Ocupada' | 'Reservada' | 'Fuera de servicio' }[] = [];
  parkings: { name: string; status: 'ACTIVE' | 'INACTIVE' }[] = [];
  rates: { timeRange: 'Diurna' | 'Nocturna' | 'Hora' | 'Día' | 'Fin de semana'; pricePerHour: number }[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clientService: Client,
    private vehicleService: Vehicle,
    private ticketService: IssuanceTicketService,
    private plazaService: Square,
    private parkingService: Parking,
    private rateService: Rate,
    private subscriptionService: Subscription
  ) {
    this.subscriptionForm = this.fb.group({
  clientId: ['', Validators.required],
  vehicleId: ['', Validators.required], // asegúrate de seleccionar
  vehicleType: [''], // se autocompleta
  vehiclePlate: [''], // se autocompleta
  subscriptionType: ['', Validators.required],
  date: ['', Validators.required],
  timeIn: [''], // quitar Validators.required
  status: ['Pendiente', Validators.required],
  plazaName: ['', Validators.required],
  parkingName: ['', Validators.required],
  rate: [0, Validators.required],
});

    this.particularForm = this.fb.group({
      clientName: ['', Validators.required],
      clientDocument: ['', Validators.required],
      vehiclePlate: ['', Validators.required],
      vehicleType: ['', Validators.required],
      date: ['', Validators.required],
      timeIn: ['', Validators.required],
      status: ['Pendiente', Validators.required],
      plazaName: ['', Validators.required],
      parkingName: ['', Validators.required],
      rate: [0, Validators.required],
    });
  }

  ngOnInit() {
    // Clientes y vehículos
    this.clientService.clients$.subscribe(c => this.clients = c);
    this.vehicleService.vehicles$.subscribe(v => this.vehicles = v);

    // Suscripciones
    this.subscriptionService.getSubscriptions().subscribe(s => this.subscriptions = s);

    // Plazas disponibles
    this.plazas = this.plazaService.getSquares()
      .map(p => ({ name: `Plaza ${p.number}`, status: p.status }))
      .filter(p => p.status === 'Libre');

    // Parkings activos
    this.parkings = this.parkingService.getParkings()
      .filter(p => p.status === 'ACTIVE');

    // Tarifas
    this.rates = this.rateService.getRates();
  }

  // Al elegir un cliente
  onClientChange(event: Event) {
    const clientId = Number((event.target as HTMLSelectElement).value);
    this.filteredVehicles = this.vehicles.filter(v => v.client_id === clientId);

    const activeSub = this.subscriptions.find(s => s.clientId === clientId && s.status === 'Activa');
    if (!activeSub) {
      this.subscriptionForm.patchValue({
        subscriptionType: '',
        vehicleId: '',
        vehicleType: '',
        vehiclePlate: '',
        rate: 0
      });
      return;
    }

    this.subscriptionForm.patchValue({
      subscriptionType: activeSub.type,
      vehicleId: '',
      vehicleType: '',
      vehiclePlate: '',
      rate: 0
    });
  }

  // Al elegir un vehículo
  onVehicleChange(event: Event) {
    const vehicleId = Number((event.target as HTMLSelectElement).value);
    const vehicle = this.vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
      this.subscriptionForm.patchValue({
        vehicleType: vehicle.type,
        vehiclePlate: vehicle.plate
      });
    }
  }

  // Guardar ticket de suscripción
  submitSubscriptionTicket() {
    if (!this.subscriptionForm.valid) return this.subscriptionForm.markAllAsTouched();

    const value = this.subscriptionForm.value;
    const ticket: TicketI = {
      clientId: Number(value.clientId),
      vehicleId: Number(value.vehicleId),
      vehicleType: value.vehicleType,
      vehiclePlate: value.vehiclePlate,
      subscriptionType: value.subscriptionType,
      date: value.date,
      timeIn: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: value.status,
      plazaName: value.plazaName,
      parkingName: value.parkingName,
      rate: value.rate
    };

    this.ticketService.addTicket(ticket);
    console.log('Ticket de suscripción guardado:', ticket);
    this.router.navigate(['/ticket-issuance']);
  }

  // Guardar ticket particular
  submitParticularTicket() {
    if (!this.particularForm.valid) return this.particularForm.markAllAsTouched();

    const value = this.particularForm.value;
    const ticket: TicketI = {
      clientName: value.clientName,
      clientDocument: value.clientDocument,
      vehiclePlate: value.vehiclePlate,
      vehicleType: value.vehicleType,
      date: value.date,
      timeIn: value.timeIn,
      status: value.status,
      plazaName: value.plazaName,
      parkingName: value.parkingName,
      rate: value.rate
    };

    this.ticketService.addTicket(ticket);
    console.log('Ticket particular guardado:', ticket);
    this.router.navigate(['/ticket-issuance']);
  }

  cancelar() { this.router.navigate(['/ticket-issuance']); }

  get fSubscription() { return this.subscriptionForm.controls; }
  get fParticular() { return this.particularForm.controls; }

  getClientName(clientId: number): string {
    const client = this.clients.find(c => c.id === clientId);
    return client ? client.name : 'Desconocido';
  }
}
