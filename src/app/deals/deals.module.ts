import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals/deals.component';


@NgModule({
  declarations: [
    DealsComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule
  ]
})
export class DealsModule { }
