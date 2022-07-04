import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DealsService } from './../services/deals.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.scss'],
})
export class DealFormComponent implements OnInit {
  form: FormGroup;
  id: any
  btnAction: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private service: DealsService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    console.log(this.data.id)

    if(this.data.id){
      this.btnAction = false;
    } else {
      this.btnAction = true;
    }

    this.form = this.formBuilder.group({
      DealName: data ? this.data.DealName : [null],
      PurchasePrice: data ? this.data.PurchasePrice : [null],
      Address: data ? this.data.Address : [null],
      NetOperatingIncome: data ? this.data.NetOperatingIncome : [null],
      CapRate: data ? this.data.CapRate : [null],
    });

  }

  saveDeals() {
    this.service
      .save(this.form.value)
      .subscribe((result) => console.log(result));

      this.openSnackBar('Save Successfully', 'ok');
  }

  apdateDeals(){
    this.openSnackBar('Update', 'ok');
  }

  openSnackBar(message: string, action = '', config?: MatSnackBarConfig) {
    return this.snackBar.open(message, action, config);
  }

  ngOnInit(): void {}
}
