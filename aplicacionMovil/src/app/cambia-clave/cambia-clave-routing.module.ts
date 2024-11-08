import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiaClavePage } from './cambia-clave.page';

const routes: Routes = [
  {
    path: '',
    component: CambiaClavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiaClavePageRoutingModule {}
