import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AccessI } from '../../../models/acces';
import { Acces } from '../../../services/acces/acces';

@Component({
  selector: 'app-get-allaccess',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allaccess.html',
  styleUrl: './get-allaccess.css'
})
export class GetAllaccess {
   accesses: AccessI[] = [];

  constructor(private accessService: Acces) {
    this.accessService.access$.subscribe(accesses => {
      this.accesses = accesses;
    });
  }
}
