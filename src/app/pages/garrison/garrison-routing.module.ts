import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarrisonPage } from './garrison.page';

const routes: Routes = [
  {
    path: '',
    component: GarrisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarrisonPageRoutingModule {}
