import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOrdersPageRoutingModule } from './list-orders-routing.module';

import { ListOrdersPage } from './list-orders.page';
import { ShareModulesModule } from 'src/app/modules/share-modules/share-modules.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOrdersPageRoutingModule,
    ShareModulesModule
  ],
  declarations: [ListOrdersPage]
})
export class ListOrdersPageModule {}
