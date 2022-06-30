import { Observable } from 'rxjs';
import { DealsService } from './../services/deals.service';
import { Deals } from './../model/deals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {

  deals$: Observable<Deals[]>;

  // deals: Deals[] = [
  //   {
  //     _id: 1,
  //     DealName: 'Name of Deeal',
  //     PurchasePrice: '$9.000',
  //     Address: 'Av Interlagos 4455',
  //     NetOperatingIncome: '$23.000',
  //     CapRate: '5%',
  //   },
  // ];
  displayedColumns = [
    'DealName',
    'PurchasePrice',
    'Address',
    'NetOperatingIncome',
    'CapRate',
  ];

  constructor(private dealsService: DealsService) {
    this.deals$ = this.dealsService.list();
  }

  ngOnInit(): void {}
}
