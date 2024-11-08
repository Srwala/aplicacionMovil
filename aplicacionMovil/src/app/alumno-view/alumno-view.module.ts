import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoViewPageRoutingModule } from './alumno-view-routing.module';

import { AlumnoViewPage } from './alumno-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoViewPageRoutingModule
  ],
  declarations: [AlumnoViewPage]
})
export class AlumnoViewPageModule {}
