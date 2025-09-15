import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Subscription} from '../../../services/subscription/subscription';
import { Payments} from '../../../services/payments/payments';
import { SubscriptionI } from '../../../models/subscription';
import { PaymentI } from '../../../models/payments';
import { ClientI } from '../../../models/client';
import { Client } from '../../../services/client/client';


@Component({
  selector: 'app-createpayments',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createpayments.html',
  styleUrl: './createpayments.css'
})
export class Createpayments {
form: FormGroup;
  clients: ClientI[] = [];                   // ✅ Clientes cargados desde el servicio
  expiredSubscriptions: SubscriptionI[] = [];
  selectedSubscription?: SubscriptionI;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private subscriptionService: Subscription,
    private paymentService: Payments,
    private clientService: Client                // ✅ Inyectamos servicio de clientes
  ) {
    this.form = this.fb.group({
      subscriptionId: ['', Validators.required],
      clientName: [{ value: '', disabled: true }],
      typeSuscripcion: [{ value: '', disabled: true }],
      monto: [{ value: '', disabled: true }],
      metodo_pago: ['', Validators.required],
      fecha_pago: ['', Validators.required]
    });
  }

  ngOnInit() {
    // ✅ Cargar clientes
    this.clientService.clients$.subscribe(clients => {
      this.clients = clients;
    });

    // Obtener solo suscripciones vencidas
    this.subscriptionService.getSubscriptions().subscribe(subs => {
      this.expiredSubscriptions = subs.filter(s => s.status === 'Vencida');
    });

    // Cuando se seleccione una suscripción, completar datos
    this.form.get('subscriptionId')?.valueChanges.subscribe(id => {
      const sub = this.expiredSubscriptions.find(s => s.id === Number(id));
      if (sub) {
        this.selectedSubscription = sub;
        this.form.patchValue({
          clientName: this.getClientName(sub.clientId),
          typeSuscripcion: sub.type,
          monto: sub.price
        });
      } else {
        this.selectedSubscription = undefined;
        this.form.patchValue({
          clientName: '',
          typeSuscripcion: '',
          monto: ''
        });
      }
    });
  }

  submit() {
    if (this.form.valid && this.selectedSubscription) {
      const value = this.form.getRawValue();
      const newPayment: PaymentI = {
        clientName: value.clientName,
        typeSuscripcion: value.typeSuscripcion,
        metodo_pago: value.metodo_pago,
        fecha_pago: value.fecha_pago,
        monto: value.monto
      };

      this.paymentService.addPayment(newPayment);
      this.router.navigate(['/payments']);
    }
  }

  cancelar() {
    this.router.navigate(['/payments']);
  }

  // Función para obtener nombre del cliente desde la lista de clientes
  getClientName(clientId: number): string {
    const client = this.clients.find(c => c.id === clientId);
    return client ? client.name : `Cliente ${clientId}`;
  }

  get f() {
    return this.form.controls;
  }
}
