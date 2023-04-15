import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientRoutingModule } from './client-routing.module';
import { CreateHambuModule } from './create-hambu/create-hambu.module';
import { ProductModule } from '../product/product.module';
import { ClientComponent } from './client.component';

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
