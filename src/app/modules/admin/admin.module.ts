import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';

@NgModule({
  declarations: [AdminComponent, CrearComponent, EditarComponent, EliminarComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminComponent],
})
export class AdminModule {}
