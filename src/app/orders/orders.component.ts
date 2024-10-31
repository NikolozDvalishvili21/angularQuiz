import { Component } from '@angular/core';
import { orderService } from '../orders.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Orders {
  id: number;
  name: string;
  loading: string;
  billable: string;
  efficiency: number;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  order: Orders[] = [];

  constructor(private orderService: orderService) {}

  ngOnInit(): void {
    this.order = this.orderService.getOrder();
  }

  loadingStatus(order: Orders) {
    return order.loading === 'High'
      ? 'red'
      : order.loading === 'Medium'
      ? 'orange'
      : order.loading === 'Low'
      ? 'green'
      : 'black';
  }

  orderCount(): number {
    return this.order.length;
  }
}
