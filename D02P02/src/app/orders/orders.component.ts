import { Component, Input } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  @Input() customerId: number | undefined;
  orders = data.orders;

  getOrders() {
    return this.orders.filter(order => order.customer_id === this.customerId);
  }
}