import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  authState$ = this.isAuthenticated.asObservable(); 
  private currentUser: any = null; 

  constructor(private storage: Storage) {
    this.init();
  }

 
  private async init() {
    await this.storage.create();
    const loggedIn = await this.storage.get('isLoggedIn');
    const user = await this.storage.get('currentUser');

    this.isAuthenticated.next(!!loggedIn); 
    this.currentUser = user; 
  }

  async login(email: string, password: string): Promise<boolean> {
    const estudiantesData = await this.storage.get('estudiantes');
    const profesoresData = await this.storage.get('profesores');

    const estudiantes = estudiantesData?.estudiantes || [];
    const profesores = profesoresData?.profesores || [];

    
    const estudiante = estudiantes.find(
      (e: any) => e.correo === email && e.contraseña === password
    );
    const profesor = profesores.find(
      (p: any) => p.correo === email && p.contraseña === password
    );

    if (estudiante || profesor) {
      const usuario = estudiante || profesor;
      await this.storage.set('isLoggedIn', true);
      await this.storage.set('currentUser', usuario);
      this.isAuthenticated.next(true);
      return true; // Login exitoso
    }

    return false; // Credenciales inválidas
  }

  // Cierra la sesión del usuario actual
  async logout(): Promise<void> {
    this.currentUser = null;
    await this.storage.set('isLoggedIn', false);
    await this.storage.remove('currentUser');
    this.isAuthenticated.next(false);
  }

  // Verifica si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }

  // Obtiene el usuario actualmente autenticado
  async getUsuarioActual(): Promise<any> {
    return this.currentUser || (await this.storage.get('currentUser'));
  }

  async getCursoProfesor(): Promise<string[]> {
    const usuario = await this.getUsuarioActual();
    const curso = usuario?.curso || ''; // Extraer el curso del profesor actual
    return curso ? [curso] : []; // Devuelve un array con el curso o vacío si no hay curso
  }

  async getCursoEstudiante(): Promise<string[]> {
    const usuario = await this.getUsuarioActual();
    const cursos = usuario?.cursos || []; // Extraer los cursos del estudiante actual
    return cursos; // Devuelve un array con los cursos del estudiante
  }

  
}

