import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaEstudiantePageRoutingModule } from './vista-estudiante-routing.module';

import { VistaEstudiantePage } from './vista-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaEstudiantePageRoutingModule
  ],
  declarations: [VistaEstudiantePage]
})
export class VistaEstudiantePageModule {}
