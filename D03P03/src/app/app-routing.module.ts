import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer-manager', pathMatch: 'full' },
  { path: 'customer-manager', component: CustomerManagerComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
