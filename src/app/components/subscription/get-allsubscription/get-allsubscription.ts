import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { SubscriptionI } from '../../../models/subscription';
import { Subscription } from '../../../services/subscription/subscription';

@Component({
  selector: 'app-get-allsubscription',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allsubscription.html',
  styleUrl: './get-allsubscription.css'
})
export class GetAllsubscription {
subscriptions: SubscriptionI[] = [];

  constructor(private subscription: Subscription) {
    this.subscription.subscriptions$.subscribe(subscriptions => {
      this.subscriptions = subscriptions;
    });
  }
}
