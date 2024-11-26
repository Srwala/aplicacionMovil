import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    const success = await this.authService.login(this.email, this.password);
    if (success) {
      // Redirige según el rol
      const usuario = await this.authService.getUsuarioActual();
      if (usuario.curso) {
        this.router.navigate(['/vista-profesor']);
      } else {
        this.router.navigate(['/vista-profesor']);
      }
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos';
    }
  }
}
