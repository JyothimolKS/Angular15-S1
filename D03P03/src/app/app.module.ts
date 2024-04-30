import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerManagerComponent,
    CustomersComponent,
    AboutComponent,
    LoginComponent,
    CardViewComponent,
    ListViewComponent,
    MapViewComponent,
    NewCustomerComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
