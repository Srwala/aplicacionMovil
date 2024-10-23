import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  nombre: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  // Método que se ejecuta al presionar el botón "Ingresar"
  onLogin() {
    if (this.nombre.trim() === '' || this.password.trim() === '') {
      // Validación para campos vacíos
      console.log('Por favor, ingresa un nombre de usuario y una contraseña');
      return;
    }

    // Simulación de validación con credenciales fijas (puedes reemplazar con lógica real o API)
    if (this.nombre === 'usuario' && this.password === '123456') {
      // Guardar el nombre de usuario en el localStorage
      localStorage.setItem('nombreUsuario', this.nombre);
      console.log('Inicio de sesión exitoso');

      // Redirigir a la página QR u otra página
      this.navCtrl.navigateForward('/qr');
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
