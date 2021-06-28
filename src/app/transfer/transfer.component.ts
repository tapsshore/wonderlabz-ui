import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.sass']
})
export class TransferComponent implements OnInit {

  transferObj = {
    sourceAccount: "",
    destinationAccount: "",
    reason:"",
    amount:0

  }
  constructor(private bankingService: BankingService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  transfer() {
    this.bankingService.transfer(this.transferObj).subscribe(data=>{
      this.toastr.success(data.message);
      console.log(data);
    }, error => {
      this.toastr.error(error.data.message);
      console.log(error);
    }
    );
  }
}
