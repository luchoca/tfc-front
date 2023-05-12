import { InjectionToken, NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './modules/product/product.component';
import { PurchaseComponent } from './modules/purchase/purchase.component';

import { AuthGuard } from './guards/auth.guard';

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: '**', redirectTo: 'login' },
//   { path: 'products', component: ProductComponent },
//   { path: 'purchase', component: PurchaseComponent },
//   { path: 'purchase-history', component: PurchaseHistoryComponent },
//   { path: 'hambu-personal', component: CreateHambuComponent },
//   { path: 'client', component: ClientComponent },
//   { path: 'admin', component: AdminComponent },
// ];

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  {
    path: '',
    component: LoginComponent,
    data: { noHeader: true },
  },
  {
    path: '**',
    redirectTo: 'login',
  },
  {
    path: 'products',
    component: ProductComponent,
    canActivate: [AuthGuard],
    //  ESTAR LOGEADO PARA PODER ACCEDER A PROD O PARA PODE COMPRAR NOMAS
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    canActivate: [AuthGuard],

    //  ESTAR LOEGADO PARA PODER VER CARRITO
  },
  {
    path: 'client',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../app/modules/client/client.module').then(
        (module) => module.ClientModule
      ),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],

    loadChildren: () =>
      import('../app/modules/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
