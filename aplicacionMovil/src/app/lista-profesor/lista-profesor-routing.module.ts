import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProfesorPage } from './lista-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProfesorPageRoutingModule {}
