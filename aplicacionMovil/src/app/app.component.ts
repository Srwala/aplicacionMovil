import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Ajusta la ruta si es necesario
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState$.subscribe((state) => {
      this.isLoggedIn = state;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
