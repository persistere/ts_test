import { Deals } from './../model/deals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  deals: Deals[] = [
    {
      _id: 1,
      DealName: 'Name of Deeal',
      PurchasePrice: '$9.000',
      Address: 'Av Interlagos 4455',
      NetOperatingIncome: '$23.000',
      CapRate: '5%',
    },
  ];
  displayedColumns = [
    'DealName',
    'PurchasePrice',
    'Address',
    'NetOperatingIncome',
    'CapRate',
  ];

  constructor() {}

  ngOnInit(): void {}
}
