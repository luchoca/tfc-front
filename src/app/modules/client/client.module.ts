import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientComponent],
  imports: [MaterialModule, CommonModule, RouterModule],
  exports: [ClientComponent],
})
export class ClientModule {}
