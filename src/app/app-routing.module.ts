import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'list-orders',
    loadChildren: () => import('./pages/list-orders/list-orders.module').then( m => m.ListOrdersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  }, 
  {
    path: 'order-details/:id',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'driver-orders',
    loadChildren: () => import('./pages/driver-orders/driver-orders.module').then( m => m.DriverOrdersPageModule)
  },
  {
    path: 'update-order-status',
    loadChildren: () => import('./pages/update-order-status/update-order-status.module').then( m => m.UpdateOrderStatusPageModule)
  },
  {
    path: 'update-order-status/:orderId',
    loadChildren: () => import('./pages/update-order-status/update-order-status.module').then( m => m.UpdateOrderStatusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
