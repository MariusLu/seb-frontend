import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component'
import { CreateCustomerComponent } from './create-customer/create-customer.component';

const routes: Routes = [
  { path: 'customers-list', component: CustomersListComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
