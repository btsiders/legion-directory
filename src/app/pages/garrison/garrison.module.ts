import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GarrisonPageRoutingModule } from './garrison-routing.module';
import { GarrisonPage } from './garrison.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarrisonPageRoutingModule,
    SharedModule
  ],
  declarations: [GarrisonPage]
})
export class GarrisonPageModule {}
