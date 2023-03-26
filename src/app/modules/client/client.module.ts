import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [MaterialModule, CommonModule],
  exports: [ClientComponent],
})
export class ClientModule {}
