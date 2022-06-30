import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  exports:[MatTableModule, MatProgressSpinnerModule]
})
export class AppMaterialModule { }
