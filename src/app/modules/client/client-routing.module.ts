import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseHistoryComponent } from 'src/app/shared/purchase-history/purchase-history.component';
import { CreateHambuComponent } from '../create-hambu/create-hambu.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    children: [
      {
        path: 'client/purchase-history',
        component: PurchaseHistoryComponent,
      },
      {
        path: 'client/hambu-personal',
        component: CreateHambuComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
