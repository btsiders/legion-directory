import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetachmentPageRoutingModule } from './detachment-routing.module';
import { DetachmentPage } from './detachment.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetachmentPageRoutingModule,
        SharedModule
    ],
    declarations: [DetachmentPage],
})
export class DetachmentPageModule { }
