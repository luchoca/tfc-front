import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PurchaseHistoryComponent } from '../../shared/purchase-history/purchase-history.component';

@NgModule({
  declarations: [PurchaseComponent, PurchaseHistoryComponent],
  imports: [CommonModule, MatIconModule, MatTableModule, MatButtonModule],
})
export class PurchaseModule {}
