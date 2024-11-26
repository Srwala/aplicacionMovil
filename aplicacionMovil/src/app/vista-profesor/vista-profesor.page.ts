import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-cursos',
  templateUrl: './vista-profesor.page.html',
  styleUrls: ['./vista-profesor.page.scss'],
})
export class VistaProfesorPage implements OnInit {
  cursos: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.cursos = await this.authService.getCursoProfesor();
    console.log(this.cursos)
  }

  verAlumnos(curso: string) {
    this.router.navigate(['/profesor-alumnos', { curso }]);
  }
}
