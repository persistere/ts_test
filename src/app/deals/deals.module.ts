import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals/deals.component';



@NgModule({
  declarations: [
    DealsComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    MatTableModule
  ]
})
export class DealsModule { }
