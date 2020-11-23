import { TransactionComponent } from './transaction/transaction.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: '**', redirectTo: 'dashboard'
      },

      
    ]

  },
  {
    path: '**', redirectTo: 'login'
  },

  { path: 'customer', component: CustomerComponent },

      { path: 'bill', component: PayBillComponent},

      { path: 'meter', component: MeterReadingComponent},

      { path: 'transaction', component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
