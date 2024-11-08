import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recupera-clave',
  templateUrl: './recupera-clave.page.html',
  styleUrls: ['./recupera-clave.page.scss'],
})
export class RecuperaClavePage {
  correo: string = ''; // Asegúrate de que la propiedad 'correo' esté definida

  constructor(private alertController: AlertController) {}

  async onLogin() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    if (emailPattern.test(this.correo)) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'El código de recuperación ha sido enviado a su correo',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese un correo electrónico válido',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}