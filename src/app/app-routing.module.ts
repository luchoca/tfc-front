import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './modules/client/client.component';
import { ProductComponent } from './modules/product/product.component';
import { PurchaseComponent } from './modules/purchase/purchase.component';
import { PurchaseHistoryComponent } from './shared/purchase-history/purchase-history.component';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: '', component: ClientComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'purchase-history', component: PurchaseHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
