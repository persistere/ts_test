import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals/deals.component';



@NgModule({
  declarations: [
    DealsComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    AppMaterialModule
  ]
})
export class DealsModule { }
