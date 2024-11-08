import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambia-clave',
  templateUrl: './cambia-clave.page.html',
  styleUrls: ['./cambia-clave.page.scss'],
})
export class CambiaClavePage {
  verificationCode: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async onChangePassword() {
    if (!this.verificationCode || isNaN(Number(this.verificationCode))) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese un código de verificación válido.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    if (this.password.length < 6) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña debe tener al menos 6 caracteres.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    if (this.password === this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Su contraseña ha sido cambiada exitosamente',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['/login']); // Redirige a la página de login
          }
        }],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Intente de nuevo.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
