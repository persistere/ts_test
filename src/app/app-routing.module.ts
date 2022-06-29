import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'deals'},
  {path: 'deals',
  loadChildren:() => import('./deals/deals.module').then(m=>m.DealsModule) } //Lazy loading

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
