import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Client } from '../../../services/client/client';

@Component({
  selector: 'app-create-client',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-client.html',
  styleUrl: './create-client.css'
})
export class CreateClient {

 form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private client: Client
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: ['ACTIVE', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;

      this.client.addClient({
        name: value.name ?? '',
        address: value.address ?? '',
        phone: value.phone ?? '',
        email: value.email ?? '',
        status:
          value.status === 'ACTIVE' || value.status === 'INACTIVE'
            ? value.status
            : 'ACTIVE',
      });

      // Redirige a la lista de clientes
      this.router.navigate(['/clients']);
    }
  }

  cancelar() {
    this.router.navigate(['/clients']);
  }

  get f() {
    return this.form.controls;
  }

}
