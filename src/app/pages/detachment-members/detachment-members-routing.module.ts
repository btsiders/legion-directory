import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetachmentMembersPage } from './detachment-members.page';

const routes: Routes = [
  {
    path: '',
    component: DetachmentMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetachmentMembersPageRoutingModule {}
