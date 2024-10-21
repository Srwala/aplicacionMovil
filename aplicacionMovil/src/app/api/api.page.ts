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

  // Agregar un nuevo estudiante
  addStudent() {
    const newUser = {
      name: { first: this.newFirstName, last: this.newLastName },
      picture: { thumbnail: 'assets/default-avatar.png' } // Avatar por defecto
    };

    this.apiService.addStudent(newUser).subscribe(updatedUsers => {
      this.users = updatedUsers;
      this.newFirstName = ''; // Limpiar el formulario
      this.newLastName = '';
    });
  }

  // Eliminar un estudiante
  removeStudent(index: number) {
    this.apiService.deleteStudent(index).subscribe(updatedUsers => {
      this.users = updatedUsers;
    });
  }
}
