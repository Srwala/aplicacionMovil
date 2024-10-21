import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-registrarse',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  // Propiedades vinculadas al formulario
  nombres: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  correo: string = '';
  contrasena: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {} // Inyecta el Router

  // Método para registrar el usuario
  registrarUsuario() {
    if (this.isFormValid()) {
      // Crear un objeto usuario
      const usuario = {
        nombres: this.nombres,
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        correo: this.correo,
        contrasena: this.contrasena,
      };

      // Guardar el usuario en localStorage
      localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

      // Redireccionar a la página de inicio de sesión
      this.router.navigate(['/login']); // Aquí cambias a la ruta correspondiente
    } else {
      this.errorMessage = 'Por favor completa todos los campos correctamente';
      console.log(this.errorMessage);
    }
  }

  // Método para validar el formulario
  isFormValid(): boolean {
    return (
      this.nombres.trim() !== '' &&
      this.apellidoPaterno.trim() !== '' &&
      this.apellidoMaterno.trim() !== '' &&
      this.isEmailValid(this.correo) &&
      this.isPasswordValid(this.contrasena)
    );
  }

  // Método para validar el correo electrónico
  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Método para validar la contraseña
  isPasswordValid(password: string): boolean {
    return password.length >= 6; // Al menos 6 caracteres
  }
}
