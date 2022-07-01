import { DealFormComponent } from './../deal-form/deal-form.component';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { catchError, Observable, of } from 'rxjs';
import { DealsService } from './../services/deals.service';
import { Deals } from './../model/deals';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {

  deals$!: Observable<Deals[]>;

  displayedColumns = [
    'DealName',
    'PurchasePrice',
    'Address',
    'NetOperatingIncome',
    'CapRate',
  ];

  constructor(private dealsService: DealsService, public dialog: MatDialog) {

  }

  listDeals(){
    this.deals$ = this.dealsService.list().pipe(
      catchError( error => { //treating error to dont load forever
        this.errorDialog('Error to load')
        return of([])
      })
    );
  }

  errorDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  addDeal(){
    this.dialog.open(DealFormComponent);
  }

  ngOnInit(): void {
    this.listDeals()
    this.dialog.afterAllClosed.subscribe(()=>{
      this.listDeals()
    })
  }
}
