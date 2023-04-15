import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ClientRoutingModule } from './client-routing.module';
import { CreateHambuModule } from '../create-hambu/create-hambu.module';
import { PurchaseHistoryComponent } from 'src/app/shared/purchase-history/purchase-history.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    ProductModule,
    CreateHambuModule,
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    CreateHambuModule,
  ],
  exports: [ClientComponent],
})
export class ClientModule {}
