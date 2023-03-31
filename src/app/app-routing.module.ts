import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './modules/admin/admin.component';
import { ClientComponent } from './modules/client/client.component';
import { CreateHambuComponent } from './modules/create-hambu/create-hambu.component';
import { ProductComponent } from './modules/product/product.component';
import { PurchaseComponent } from './modules/purchase/purchase.component';
import { PurchaseHistoryComponent } from './shared/purchase-history/purchase-history.component';

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
  },
  {
    path: '**',
    redirectTo: 'login',
  },
  {
    path: 'products',
    component: ProductComponent,
    //  ESTAR LOGEADO PARA PODER ACCEDER A PROD O PARA PODE COMPRAR NOMAS
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    //  ESTAR LOEGADO PARA PODER VER CARRITO
  },
  {
    path: 'client',
    loadChildren: () =>
      import('../app/modules/client/client.module').then(
        (module) => module.ClientModule
      ),
  },
  {
    path: 'admin',
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
