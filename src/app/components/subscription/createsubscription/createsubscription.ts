import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Client } from '../../../services/client/client';
import { ClientI } from '../../../models/client';
import { Subscription } from '../../../services/subscription/subscription';
import { SubscriptionI } from '../../../models/subscription';
import { Vehicle } from '../../../services/vehicle/vehicle';
import { VehicleI } from '../../../models/vehicle';

@Component({
  selector: 'app-createsubscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createsubscription.html',
  styleUrls: ['./createsubscription.css']
})
export class Createsubscription implements OnInit {
  form: FormGroup;
  clients: ClientI[] = [];
  vehicles: VehicleI[] = [];
  filteredVehicles: VehicleI[] = [];

  // Precios predefinidos
  prices: Record<'Mensual' | 'Trimestral' | 'Anual', number> = {
    Mensual: 30000,
    Trimestral: 80000,
    Anual: 300000
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private subscriptionService: Subscription,
    private clientService: Client,
    private vehicleService: Vehicle
  ) {
    this.form = this.fb.group({
      clientId: ['', Validators.required],          
      vehicleId: ['', Validators.required],         
      type: ['', Validators.required],              
      startDate: ['', Validators.required],         
      endDate: ['', Validators.required],           
      status: ['Activa', Validators.required],      
      price: [{ value: '', disabled: true }, Validators.required] // Se llena automático
    });
  }

  ngOnInit() {
    // Obtener clientes
    this.clientService.clients$.subscribe(clients => {
      this.clients = clients;
    });

    // Obtener vehículos
    this.vehicleService.vehicles$.subscribe(vehicles => {
      this.vehicles = vehicles;
    });

    // Escuchar cambios en el tipo de suscripción
    this.form.get('type')?.valueChanges.subscribe(type => {
      if (type && this.prices[type as keyof typeof this.prices]) {
        this.form.patchValue({ price: this.prices[type as keyof typeof this.prices] });
      } else {
        this.form.patchValue({ price: '' });
      }
    });
  }

  // Filtrar vehículos al elegir un cliente
  onClientChange(event: Event) {
    const clientId = Number((event.target as HTMLSelectElement).value);
    this.filteredVehicles = this.vehicles.filter(v => v.client_id === clientId);

    // Limpiar selección previa si cambia de cliente
    this.form.patchValue({ vehicleId: '' });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.getRawValue(); // getRawValue para incluir price aunque esté disabled
      const newSubscription: SubscriptionI = {
        clientId: Number(value.clientId),
        type: value.type as 'Mensual' | 'Trimestral' | 'Anual',
        startDate: value.startDate,
        endDate: value.endDate,
        status: value.status as 'Activa' | 'Vencida',
        vehicleIds: [Number(value.vehicleId)],
        price: value.price // 💰 Guardamos el precio automático
      };
      this.subscriptionService.addSubscription(newSubscription);
      this.router.navigate(['/subscription']);
    }
  }

  cancelar() {
    this.router.navigate(['/subscription']);
  }

  get f() {
    return this.form.controls;
  }

  getClientName(clientId: number): string {
    const client = this.clients.find(c => c.id === clientId);
    return client ? client.name : 'Desconocido';
  }
}
