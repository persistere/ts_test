import { DealFormComponent } from './../deals/deal-form/deal-form.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    DealFormComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ErrorDialogComponent,
    DealFormComponent
  ]
})
export class SharedModule { }
