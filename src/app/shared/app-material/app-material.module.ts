import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  exports:[MatTableModule, MatProgressSpinnerModule, MatDialogModule]
})
export class AppMaterialModule { }
