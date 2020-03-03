import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetachmentPageRoutingModule } from './detachment-routing.module';
import { DetachmentPage } from './detachment.page';
import { HtmlDecodePipe } from 'src/app/shared/html-decode.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetachmentPageRoutingModule,
  ],
  declarations: [DetachmentPage, HtmlDecodePipe],
})
export class DetachmentPageModule {}
