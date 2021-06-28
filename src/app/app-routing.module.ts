import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'new-account', // child route path
        component: NewAccountComponent, // child route component that the router renders
      },
      {
        path: 'deposit', // child route path
        component: DepositComponent, // child route component that the router renders
      },
      {
        path: 'withdraw', // child route path
        component: WithdrawComponent, // child route component that the router renders
      },
      {
        path: 'transfer', // child route path
        component: TransferComponent, // child route component that the router renders
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
