import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Parking } from '../../../services/parking/parking';

@Component({
  selector: 'app-createparking',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createparking.html',
  styleUrl: './createparking.css'
})
export class Createparking {
 form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private parking: Parking
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      totalCapacity: ['', [Validators.required, Validators.min(1)]],
      status: ['ACTIVE', Validators.required], 
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;

      this.parking.addParking({
        name: value.name ?? '',
        address: value.address ?? '',
        totalCapacity: Number(value.totalCapacity) ?? 0,
        status: value.status === 'ACTIVE' || value.status === 'INACTIVE' ? value.status : 'ACTIVE'
      });

      // Redirige a la lista de parqueaderos
      this.router.navigate(['/parking']);
    }
  }

  cancelar() {
    this.router.navigate(['/parking']);
  }

  get f() {
    return this.form.controls;
  }
}
