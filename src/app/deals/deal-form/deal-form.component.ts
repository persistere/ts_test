import { DealsService } from './../services/deals.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.scss']
})
export class DealFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: DealsService) {
    this.form = this.formBuilder.group({
      DealName: [null],
      PurchasePrice: [null],
      Address: [null],
      NetOperatingIncome: [null],
      CapRate: [null]

    })
  }

  saveDeals(){
    // console.log(this.form.value)
    this.service.save(this.form.value);

  }

  ngOnInit(): void {
  }

}
