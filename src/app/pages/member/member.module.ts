import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MemberPageRoutingModule } from './member-routing.module';
import { MemberPage } from './member.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberPageRoutingModule,
    SharedModule
  ],
  declarations: [MemberPage]
})
export class MemberPageModule {}
