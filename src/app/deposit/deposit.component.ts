import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.sass']
})
export class DepositComponent implements OnInit {

  depositObj = {
    accountNumber: "",
    amount: 0
  }
  constructor(private bankingService: BankingService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  deposit() {
    this.bankingService.deposit(this.depositObj).subscribe(data=>{
      this.toastr.success(data.message);
      console.log(data);
    }, error => {
      this.toastr.error(error.data.message);
      console.log(error);
    }
    );
  }

}
