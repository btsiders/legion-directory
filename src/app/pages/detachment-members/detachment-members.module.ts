import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetachmentMembersPageRoutingModule } from './detachment-members-routing.module';

import { DetachmentMembersPage } from './detachment-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetachmentMembersPageRoutingModule
  ],
  declarations: [DetachmentMembersPage]
})
export class DetachmentMembersPageModule {}
