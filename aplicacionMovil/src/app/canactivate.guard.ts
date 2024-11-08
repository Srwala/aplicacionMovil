import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service'; // Ajusta la ruta según corresponda
import { Router } from '@angular/router';

export const canactivateGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']); // Redirige al login si no está autenticado
    return false;
  }
  return true;

};
