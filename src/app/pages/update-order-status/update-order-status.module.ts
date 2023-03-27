import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateOrderStatusPageRoutingModule } from './update-order-status-routing.module';

import { UpdateOrderStatusPage } from './update-order-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateOrderStatusPageRoutingModule
  ],
  declarations: [UpdateOrderStatusPage]
})
export class UpdateOrderStatusPageModule {}
