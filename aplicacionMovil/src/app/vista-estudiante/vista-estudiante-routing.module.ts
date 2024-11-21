import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaEstudiantePage } from './vista-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: VistaEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaEstudiantePageRoutingModule {}
