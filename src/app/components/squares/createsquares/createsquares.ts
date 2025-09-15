import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Square } from '../../../services/square/square';
import { Parking } from '../../../services/parking/parking';
import { ParkingI } from '../../../models/parking';

@Component({
  selector: 'app-createsquares',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './createsquares.html',
  styleUrl: './createsquares.css'
})
export class Createsquares {
 form: FormGroup;
  parkings: ParkingI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private square: Square,
    private parking: Parking
  ) {
    this.form = this.fb.group({
      number: ['', Validators.required],
      type: ['', Validators.required], // Carro | Moto | Bici
      status: ['', Validators.required], // Libre | Ocupada | Reservada | Fuera de servicio
      parkingId: ['', Validators.required] // Selección de Parqueadero
    });
  }

  ngOnInit() {
    // Traer lista de parqueaderos para seleccionar en el formulario
    this.parking.parkings$.subscribe(parkings => {
      this.parkings = parkings;
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;
      this.square.addSquare({
        number: Number(value.number),
        type: value.type ?? 'Carro',
        status: value.status ?? 'Libre',
        parkingId: Number(value.parkingId)
      });
      this.router.navigate(['/squares']);
    }
  }

  cancelar() {
    this.router.navigate(['/squares']);
  }

  get f() {
    return this.form.controls;
  }
}
