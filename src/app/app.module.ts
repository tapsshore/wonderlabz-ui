import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { HomeComponent } from './home/home.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Function for setting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:8080');
  RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewAccountComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
