import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseHistoryComponent } from 'src/app/shared/purchase-history/purchase-history.component';
<<<<<<< HEAD
import { ClientComponent } from './client.component';
import { CreateHambuComponent } from './create-hambu/create-hambu.component';
=======
import { CreateHambuComponent } from '../create-hambu/create-hambu.component';
import { ClientComponent } from './client.component';
>>>>>>> 5e0c0e9cb4902ddfa136fc079abd8bcceaaf2637

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    children: [
      {
<<<<<<< HEAD
        path: 'purchase-history',
        component: PurchaseHistoryComponent,
      },
      {
        path: 'hambu-personal',
=======
        path: 'client/purchase-history',
        component: PurchaseHistoryComponent,
      },
      {
        path: 'client/hambu-personal',
>>>>>>> 5e0c0e9cb4902ddfa136fc079abd8bcceaaf2637
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
