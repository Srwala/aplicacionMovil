import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; 

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  async onLogin() {
    
    this.navCtrl.navigateRoot('/qr'); 
 
    await this.showWelcomeAlert();
  }
  async showWelcomeAlert() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: `¡Bienvenido, ${this.username}!`, 
      buttons: ['OK']
    });

    await alert.present();
  }
}
