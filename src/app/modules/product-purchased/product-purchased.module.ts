import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPurchasedComponent } from './product-purchased.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductPurchasedComponent],
  imports: [
    MaterialModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class ProductPurchasedModule {}
