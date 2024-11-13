import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiPage } from './api.page';
import { canactivateGuard } from '../canactivate.guard';
import { CandeactivateGuard } from '../candeactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: ApiPage,
    canActivate: [canactivateGuard],
    canDeactivate: [CandeactivateGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiPageRoutingModule {}
