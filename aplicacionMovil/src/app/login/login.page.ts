import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Método que se ejecuta al presionar el botón "Ingresar"
    login(){
      if (this.authService.login(this.username, this.password)) {
        this.router.navigate(['/dashboard'], {state: {username: this.username}});
      } else {
        alert('Nombre de Usuario o Contraseña Incorrecta');
      }
    }
  }
