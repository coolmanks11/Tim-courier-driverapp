import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToListOrderPage = () => redirectLoggedInTo(['list-orders']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'list-orders',
    loadChildren: () => import('./pages/list-orders/list-orders.module').then( m => m.ListOrdersPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToListOrderPage)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  }, 
  {
    path: 'order-details/:id',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'driver-orders',
    loadChildren: () => import('./pages/driver-orders/driver-orders.module').then( m => m.DriverOrdersPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'update-order-status',
    loadChildren: () => import('./pages/update-order-status/update-order-status.module').then( m => m.UpdateOrderStatusPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'update-order-status/:orderId',
    loadChildren: () => import('./pages/update-order-status/update-order-status.module').then( m => m.UpdateOrderStatusPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
