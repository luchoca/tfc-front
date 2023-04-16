import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { ClientRoutingModule } from './client-routing.module';
import { CreateHambuModule } from '../create-hambu/create-hambu.module';
import { ProductModule } from '../product/product.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    ProductModule,
    CreateHambuModule,
    CommonModule,
    ClientRoutingModule,
    RouterModule,
  ],
  exports: [ClientComponent, CreateHambuModule],
})
export class ClientModule {}
