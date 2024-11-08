import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-view',
  templateUrl: './alumno-view.page.html',
  styleUrls: ['./alumno-view.page.scss'],
})
export class AlumnoViewPage{
  nombre: string = '';

  constructor() { }

  onLogin() {
    localStorage.setItem('nombreUsuario', this.nombre);
    console.log('Nombre guardado:', this.nombre);
  }

}
