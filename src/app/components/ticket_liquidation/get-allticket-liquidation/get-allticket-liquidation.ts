import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TicketII } from '../../../models/ticket_liquidation';
import { LiquidationTicketService } from '../../../services/liquidation_ticket/liquidation-ticket';


@Component({
  selector: 'app-get-allticket-liquidation',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allticket-liquidation.html',
  styleUrls: ['./get-allticket-liquidation.css']
})
export class GetAllticketLiquidation {
 tickets: TicketII[] = [];

  constructor(private ticketService: LiquidationTicketService) {
    this.ticketService.tickets$.subscribe(tickets => {
      this.tickets = tickets;
    });
  }
}
