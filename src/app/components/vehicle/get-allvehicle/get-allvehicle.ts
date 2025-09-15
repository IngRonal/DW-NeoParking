import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { VehicleI } from '../../../models/vehicle';
import { Vehicle } from '../../../services/vehicle/vehicle';

@Component({
  selector: 'app-get-allvehicle',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allvehicle.html',
  styleUrl: './get-allvehicle.css'
})
export class GetAllvehicle {
vehicles: VehicleI[] = [];

  constructor(private vehicle: Vehicle) {
    // suscribirse al observable para tener los vehículos actualizados
    this.vehicle.vehicles$.subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }
}
