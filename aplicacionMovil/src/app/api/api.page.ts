import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  users: any[] = [];
  newFirstName: string = '';
  newLastName: string = '';
  newImageUrl: string = ''; // Variable para almacenar la URL de la imagen

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadStudents();
  }

  // Cargar estudiantes desde el servicio
  loadStudents() {
    this.apiService.loadStudents().subscribe(users => {
      this.users = users;
    });
  }

  // Agregar un nuevo estudiante con validación y carga de imagen opcional
  addStudent() {
    if (!this.newFirstName || !this.newLastName) {
      alert('Por favor, ingrese el nombre y el apellido del estudiante.');
      return;
    }

    const newUser = {
      name: { first: this.newFirstName, last: this.newLastName },
      picture: { thumbnail: this.newImageUrl || 'assets/default-avatar.png' } // Imagen opcional, si no hay, usa la predeterminada
    };

    this.apiService.addStudent(newUser).subscribe(updatedUsers => {
      this.users = updatedUsers;
      this.newFirstName = ''; // Limpiar el formulario
      this.newLastName = '';
      this.newImageUrl = ''; // Limpiar la URL de la imagen
    });
  }

  // Eliminar un estudiante
  removeStudent(index: number) {
    this.apiService.deleteStudent(index).subscribe(updatedUsers => {
      this.users = updatedUsers;
    });
  }

}
