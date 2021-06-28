import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.sass']
})
export class NewAccountComponent implements OnInit {

  newAccount = {
    fullName: "",
    address: "",
    accountType: "",
    idNumber: "",
    phoneNumber:"",
    emailAddress: "",
    initialDeposit:""
  }

  constructor(private bankingService: BankingService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createNewAccount() {
    this.bankingService.createAccount(this.newAccount).subscribe(data=>{
      this.toastr.success("Account Created successifully");
      console.log(data);
    }, error => {
      this.toastr.error(error.data.message);
      console.log(error);
    }
    );
  }
}
