import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Deposit } from '../../../services/deposit/deposit';
import { Subscription } from '../../../services/subscription/subscription';
import { SubscriptionI } from '../../../models/subscription';
import { Client } from '../../../services/client/client';
import { ClientI } from '../../../models/client';

@Component({
  selector: 'app-createdeposit',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createdeposit.html',
  styleUrl: './createdeposit.css'
})
export class Createdeposit implements OnInit {
  form: FormGroup;
  subscriptions: SubscriptionI[] = [];
  clients: ClientI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private depositService: Deposit,
    private subscriptionService: Subscription,
    private clientService: Client
  ) {
    this.form = this.fb.group({
      id_suscripcion: ['', Validators.required], // FK con suscripción
      monto: ['', [Validators.required, Validators.min(1)]],
      fecha: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.subscriptionService.subscriptions$.subscribe(subs => {
      this.subscriptions = subs;
    });

    this.clientService.clients$.subscribe(clients => {
      this.clients = clients;
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;
      this.depositService.addDeposit({
        id_suscripcion: Number(value.id_suscripcion),
        monto: Number(value.monto),
        fecha: value.fecha ?? ''
      });
      this.router.navigate(['/deposits']);
    }
  }

  cancelar() {
    this.router.navigate(['/deposits']);
  }

  get f() {
    return this.form.controls;
  }

  // Método para obtener el nombre del cliente a partir de su ID
  getClientName(clientId: number): string {
    const client = this.clients.find(c => c.id === clientId);
    return client ? client.name : 'Desconocido';
  }
}
