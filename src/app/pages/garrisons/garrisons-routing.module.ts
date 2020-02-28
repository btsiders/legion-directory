import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarrisonsPage } from './garrisons.page';

const routes: Routes = [
  {
    path: '',
    component: GarrisonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarrisonsPageRoutingModule {}
