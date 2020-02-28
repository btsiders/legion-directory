import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetachmentsPage } from './detachments.page';

const routes: Routes = [
  {
    path: '',
    component: DetachmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetachmentsPageRoutingModule {}
