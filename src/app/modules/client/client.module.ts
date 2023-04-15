import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { ClientRoutingModule } from './client-routing.module';
import { CreateHambuModule } from './create-hambu/create-hambu.module';
import { ProductModule } from '../product/product.module';
import { ClientComponent } from './client.component';
=======
import { ClientComponent } from './client.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ClientRoutingModule } from './client-routing.module';
import { CreateHambuModule } from '../create-hambu/create-hambu.module';
import { PurchaseHistoryComponent } from 'src/app/shared/purchase-history/purchase-history.component';
import { ProductModule } from '../product/product.module';
>>>>>>> 5e0c0e9cb4902ddfa136fc079abd8bcceaaf2637

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
