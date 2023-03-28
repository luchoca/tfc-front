import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { ClientComponent } from './modules/client/client.component';
import { CreateHambuComponent } from './modules/create-hambu/create-hambu.component';
import { ProductComponent } from './modules/product/product.component';
import { PurchaseComponent } from './modules/purchase/purchase.component';
import { PurchaseHistoryComponent } from './shared/purchase-history/purchase-history.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: '', component: ClientComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'purchase-history', component: PurchaseHistoryComponent },
  { path: 'hambu-personal', component: CreateHambuComponent },
  { path: 'admin', component: AdminComponent },
];

// const routes2: Routes = [
//   {
//     path: '',
//     component: UserComponent,
//   },
//   {
//     path: 'buy',
//     component: BuyComponent,
//   },
//   {
//     path: 'products',
//     loadChildren: () =>
//       import('./products/products.module').then(
//         (module) => module.ProductsModule
//       ),
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
