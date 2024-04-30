import { Component } from '@angular/core';
import { Customer } from './customer'; // assuming you have a Customer interface or class

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers: Customer[] = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' }
    // Add more customers as needed
  ];
  filteredCustomers: Customer[];
  searchText: string = '';

  constructor() {
    this.filteredCustomers = this.customers;
  }

  applyFilter() {
    this.filteredCustomers = this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      customer.email.toLowerCase().includes(this.searchText.toLowerCase())
      // Add more properties as needed for filtering
    );
  }
}
