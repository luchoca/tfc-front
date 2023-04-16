import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHambuComponent } from './create-hambu.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [CreateHambuComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CreateHambuComponent],
})
export class CreateHambuModule {}
