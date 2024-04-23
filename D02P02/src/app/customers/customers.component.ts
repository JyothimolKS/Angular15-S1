import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any[] = [];
  orders: any;
  constructor() { }

  ngOnInit(): void {
    this.customers = data.customers; // Assign the imported JSON data to the property
    console.log(this.customers); // Output the customer data to the console
  }

  addOrdersToCustomers() {
    this.customers.forEach(customer => {
      const orders = this.orders.filter((order: { customer_id: any; }) => order.customer_id === customer.id);
      customer.orders = orders;
    });
  }


}
