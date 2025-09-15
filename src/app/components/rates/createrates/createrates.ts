import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Rate } from '../../../services/rate/rate';

@Component({
  selector: 'app-createrates',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createrates.html',
  styleUrl: './createrates.css'
})
export class Createrates {
 form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private rate: Rate
  ) {
    this.form = this.fb.group({
      timeRange: ['', Validators.required], // Diurna | Nocturna | Hora | Día | Fin de semana
      pricePerHour: [0, [Validators.required, Validators.min(0)]],
      pricePerDay: [0, [Validators.required, Validators.min(0)]],
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;

      this.rate.addRate({
        timeRange: value.timeRange,
        pricePerHour: Number(value.pricePerHour) ?? 0,
        pricePerDay: Number(value.pricePerDay) ?? 0,
      });

      // Redirige a la lista de tarifas
      this.router.navigate(['/rates']);
    }
  }

  cancelar() {
    this.router.navigate(['/rates']);
  }

  get f() {
    return this.form.controls;
  }
}
