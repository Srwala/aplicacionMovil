import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.page.html',
  styleUrls: ['./lista-profesor.page.scss'],
})
export class ListaProfesorPage implements OnInit {

  curso: string = '';
  alumnos: any[] = [];

  constructor(private route: ActivatedRoute, private storage: Storage) {}

  async ngOnInit() {
    // Recupera el parámetro del curso desde la ruta
    this.curso = this.route.snapshot.paramMap.get('curso') || '';

    // Carga los estudiantes desde Ionic Storage
    const estudiantesData = await this.storage.get('estudiantes');
    const estudiantes = estudiantesData?.estudiantes || [];

    // Filtra los alumnos que pertenecen al curso seleccionado
    this.alumnos = estudiantes.filter((alumno: any) => alumno.curso === this.curso);

    // Agrega el estado inicial "ausente" para cada alumno
    this.alumnos = this.alumnos.map((alumno: any) => ({
      ...alumno,
      estado: 'ausente', // Estado inicial
    }));

    console.log('Alumnos del curso:', this.alumnos);
  }

}
