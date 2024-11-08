import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoViewPage } from './alumno-view.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoViewPageRoutingModule {}
