import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../modules/material/material.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, MaterialModule],
})
export class LoginModule {}
