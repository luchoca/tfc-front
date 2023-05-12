import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseHistoryComponent } from 'src/app/shared/purchase-history/purchase-history.component';
import { ClientComponent } from './client.component';
import { CreateHambuComponent } from './create-hambu/create-hambu.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'client',
    canActivate: [AuthGuard],
    component: ClientComponent,
    children: [
      {
        path: 'purchase-history',
        component: PurchaseHistoryComponent,
      },
      {
        path: 'hambu-personal',
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
