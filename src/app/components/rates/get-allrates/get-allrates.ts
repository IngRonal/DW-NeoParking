import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { RateI } from '../../../models/rates';   
import { Rate } from '../../../services/rate/rate'; 

@Component({
  selector: 'app-get-allrates',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allrates.html',
  styleUrl: './get-allrates.css'
})
export class GetAllrates {
 rateList: RateI[] = [];  

  constructor(private rateService: Rate) {   
    this.rateService.rates$.subscribe(rates => {
      this.rateList = rates;
    });
  }
}
