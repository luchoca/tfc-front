import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHambuComponent } from './create-hambu.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateHambuComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [CreateHambuComponent],
})
export class CreateHambuModule {}
