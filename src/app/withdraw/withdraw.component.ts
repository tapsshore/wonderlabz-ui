import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.sass']
})
export class WithdrawComponent implements OnInit {

  withdrawObj = {
    accountNumber: "",
    amount: 0
  }
  constructor(private bankingService: BankingService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  withdraw() {
    this.bankingService.withdraw(this.withdrawObj).subscribe(data=>{
      this.toastr.success(data.message);
      console.log(data);
    }, error => {
      this.toastr.error(error.data.message);
      console.log(error);
    }
    );
  }

}
