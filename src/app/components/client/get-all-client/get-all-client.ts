import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ClientI } from '../../../models/client';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Client } from '../../../services/client/client';


@Component({
  selector: 'app-get-all-client',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-all-client.html',
  styleUrl: './get-all-client.css'
})
export class GetAllClient {
   clients: ClientI[] = [];

  constructor(private client: Client) {
    this.client.clients$.subscribe(clients => {
      this.clients = clients;
    });
  }
   
}
