import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

//Materials
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderModule } from 'src/app/shared/header/header.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDialogModule,
  ],
})
export class ProductModule {}
