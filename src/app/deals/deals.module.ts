import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals/deals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DealsComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DealsModule { }
