import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  nombre: string = '';

  constructor() {}

  onLogin() {
    localStorage.setItem('nombreUsuario', this.nombre);
    console.log('Nombre guardado:', this.nombre);
  }
}
