import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ParkingI } from '../../../models/parking';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Parking} from '../../../services/parking/parking';

@Component({
  selector: 'app-get-allparking',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allparking.html',
  styleUrl: './get-allparking.css'
})
export class GetAllparking {
parkings: ParkingI[] = [];

  constructor(private parking: Parking) {
    this.parking.parkings$.subscribe(parkings => {
      this.parkings = parkings;
    });
  }
}
