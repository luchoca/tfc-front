import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { RouterModule } from '@angular/router';
import { ProductPurchasedModule } from 'src/app/modules/product-purchased/product-purchased.module';
import { ClientModule } from 'src/app/modules/client/client.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ProductPurchasedModule,
    ClientModule,
  ],
  exports: [HeaderComponent, RouterModule],
})
export class HeaderModule {}
