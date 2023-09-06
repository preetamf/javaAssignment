import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';

const routes: Routes = [
  {path:'',component:ViewCustomerComponent},
  {path:'add',component:AddCustomerComponent},
  {path:'update/:id',component:UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
