import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProfesorPageRoutingModule } from './lista-profesor-routing.module';

import { ListaProfesorPage } from './lista-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProfesorPageRoutingModule
  ],
  declarations: [ListaProfesorPage]
})
export class ListaProfesorPageModule {}
