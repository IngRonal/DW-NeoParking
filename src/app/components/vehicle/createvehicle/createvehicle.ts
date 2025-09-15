import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../../services/vehicle/vehicle';
import { Client } from '../../../services/client/client';
import { ClientI } from '../../../models/client';

@Component({
  selector: 'app-createvehicle',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createvehicle.html',
  styleUrls: ['./createvehicle.css']
})
export class Createvehicle implements OnInit {
  form: FormGroup;
  clients: ClientI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private vehicle: Vehicle,
    private clientService: Client
  ) {
    this.form = this.fb.group({
      plate: ['', Validators.required],
      type: ['', Validators.required], // carro | moto | bici
      color: ['', Validators.required],
      brand: ['', Validators.required],
      client_id: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.clientService.clients$.subscribe(clients => {
      this.clients = clients;
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;
      this.vehicle.addVehicle({
        plate: value.plate ?? '',
        type: value.type ?? 'carro',
        color: value.color ?? '',
        brand: value.brand ?? '',
        client_id: Number(value.client_id)
      });
      this.router.navigate(['/vehicle']);
    }
  }

  cancelar() {
    this.router.navigate(['/vehicle']);
  }

  get f() {
    return this.form.controls;
  }
}
