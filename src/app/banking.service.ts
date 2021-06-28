import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  

  constructor(private restangular: Restangular) { }

  
  createAccount(request): Observable<any> {
    const baseProjections = this.restangular.all('v1/account');
    return baseProjections.post(request, {}, {});
  }

  deposit(request):Observable<any> {
    const baseProjections = this.restangular.all('v1/transact/deposit');
    return baseProjections.post(request, {}, {});
  }

  withdraw(request) :Observable<any> {
    const baseProjections = this.restangular.all('v1/transact/withdraw');
    return baseProjections.post(request, {}, {});
  }

  transfer(request) :Observable<any> {
    const baseProjections = this.restangular.all('v1/transact/transfer');
    return baseProjections.post(request, {}, {});
  }
}
