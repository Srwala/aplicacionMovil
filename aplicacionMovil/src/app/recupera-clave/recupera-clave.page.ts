import { Component } from '@angular/core';

@Component({
  selector: 'app-recupera-clave',
  templateUrl: './recupera-clave.page.html',
  styleUrls: ['./recupera-clave.page.scss'],
})
export class RecuperaClavePage {

  // Define la propiedad nombre
  nombre: string = '';

  constructor() { }

  // Método onLogin
  onLogin() {
    console.log('Iniciar sesión con:', this.nombre);
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
  }
}
