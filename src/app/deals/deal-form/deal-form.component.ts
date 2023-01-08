import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DealsService } from './../services/deals.service';
import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.scss'],
})
export class DealFormComponent implements OnInit {
  form: FormGroup;
  id!: number;
  btnAction: boolean;
  price!: number;
  noi!: number;

  eneDin = false;
  eneDinClose = true;

  @ViewChild('getPrice') getPrice:ElementRef | undefined;
  @ViewChild('getNoi') getNoi:ElementRef | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private service: DealsService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data.id) {
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
      Id: data ? this.data.id : [null],
    });
  }

  calcCap() {
    this.price = this.getPrice?.nativeElement.value;
    this.noi = this.getNoi?.nativeElement.value;
    let calc = (( this.price * this.noi )/100);
    return calc;
  }

  validateInfo(event: any) {
    if (event.target.value == null || event.target.value == '') {
      this.eneDin = false;
    } else {
      this.eneDin = true;
    }
    return this.eneDin;
  }

  saveDeals() {
    this.eneDin = false;
    this.service
      .save(this.form.value)
      .subscribe((result) => this.showMsg(result.msn));
  }

  removeDeals() {
    this.eneDinClose = false;
    this.service
      .remove(this.form.value)
      .subscribe((result) => this.showMsg(result.msn));
  }

  showMsg(m: any) {
    this.openSnackBar(m, 'ok');
    this.eneDin = false;
    this.eneDinClose = false;
  }

  openSnackBar(message: string, action = '', config?: MatSnackBarConfig) {
    return this.snackBar.open(message, action, config);
  }

  ngOnInit(): void {}
}
