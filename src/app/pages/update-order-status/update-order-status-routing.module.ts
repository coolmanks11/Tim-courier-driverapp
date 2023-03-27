import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateOrderStatusPage } from './update-order-status.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateOrderStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateOrderStatusPageRoutingModule {}
