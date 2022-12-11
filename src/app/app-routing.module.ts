import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  //login
  {
    path:'' , component:LoginComponent
  },
  //dashboard
  {
    path:'dashboard' , component:DashboardComponent
  },
  //register
  {
    path:'register' , component:RegisterComponent
  },
  //DepositComponent
  {
    path:'deposit', component:DepositComponent
  },
  //WithdrawComponent
  {
    path:'withdraw' , component:WithdrawComponent
  },
  //TransactionComponent
  {
    path:'transaction', component:TransactionComponent
  }
];

@NgModule({
  //          //auto refresh - {onSameUrlNavigation: 'reload'}
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
