import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarrisonsPageRoutingModule } from './garrisons-routing.module';

import { GarrisonsPage } from './garrisons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarrisonsPageRoutingModule
  ],
  declarations: [GarrisonsPage]
})
export class GarrisonsPageModule {}
