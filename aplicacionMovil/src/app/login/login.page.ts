import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService,
              private router: Router,
              private alertController: AlertController,
              private dataService: DataServiceService) {}

  async login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/api'], { state: { username: this.username } });
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Nombre de Usuario o Contraseña Incorrecta',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
  
