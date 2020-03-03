import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetachmentPage } from './detachment.page';

const routes: Routes = [
  {
    path: '',
    component: DetachmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetachmentPageRoutingModule {}
