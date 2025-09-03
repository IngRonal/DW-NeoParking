import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ClientI } from '../../../models/client';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-get-all-client',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-all-client.html',
  styleUrl: './get-all-client.css'
})
export class GetAllClient {
  
   clients: ClientI[] = [
     {
       id: 1,
       name: 'John Doe',
       address: '123 Main St',
       phone: '123-456-7890',
       email: 'john.doe@example.com',
       status: 'ACTIVE'
     },
     {
       id: 2,
       name: 'Jane Smith',
       address: '456 Elm St',
       phone: '987-654-3210',
       email: 'jane.smith@example.com',
       status: 'INACTIVE'
     },
     {
       id: 3,
       name: 'Alice Johnson',
       address: '789 Oak St',
       phone: '555-123-4567',
       email: 'alice.johnson@example.com',
       status: 'ACTIVE'
     }
   ];
   client: ClientI | null = null;

}
