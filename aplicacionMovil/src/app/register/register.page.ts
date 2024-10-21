import { Component } from '@angular/core';

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

  constructor() {}

  // Método para registrar el usuario
  registrarUsuario() {
    // Verificar que todos los campos estén completos
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

      // Redireccionar a la página de inicio de sesión o mostrar mensaje de éxito
      console.log('Usuario registrado:', usuario);
      // Aquí puedes redirigir a otra página si es necesario
    } else {
      console.log('Por favor completa todos los campos correctamente');
      // Aquí puedes mostrar un mensaje de error si algún campo está vacío o es inválido
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
