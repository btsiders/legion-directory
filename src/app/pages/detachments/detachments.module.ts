import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetachmentsPageRoutingModule } from './detachments-routing.module';

import { DetachmentsPage } from './detachments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetachmentsPageRoutingModule
  ],
  declarations: [DetachmentsPage]
})
export class DetachmentsPageModule {}
