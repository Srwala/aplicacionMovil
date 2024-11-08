import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiaClavePageRoutingModule } from './cambia-clave-routing.module';

import { CambiaClavePage } from './cambia-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiaClavePageRoutingModule
  ],
  declarations: [CambiaClavePage]
})
export class CambiaClavePageModule {}
