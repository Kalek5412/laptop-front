import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopsComponent } from './laptops/laptops.component';

const routes: Routes = [
  {path:'', component: LaptopsComponent},
  {path:'laptops', component: LaptopsComponent},
  {path:'**', redirectTo:'laptops',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
