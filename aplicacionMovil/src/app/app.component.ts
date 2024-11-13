import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Ajusta la ruta si es necesario
import { Router } from '@angular/router';
import { CanComponentDeactivate } from './candeactivate.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements CanComponentDeactivate {
  isLoggedIn: boolean = false;

  canDeactivate(): boolean {
    return confirm('¿Estás seguro de que deseas cerrar la sesión?');
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState$.subscribe((state) => {
      this.isLoggedIn = state;
    });
  }

  logout() {
    if (this.canDeactivate()){
      this.authService.logout();
      this.router.navigate(['/login']);
      console.log('Sesion Cerrada')
    }
  }
  login() {
    this.router.navigate(['/login']);
  }
}
