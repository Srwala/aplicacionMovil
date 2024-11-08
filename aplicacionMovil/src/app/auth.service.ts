import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  authState$ = this.isAuthenticated.asObservable();

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated.next(true);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }

  logout(): void {
    this.isAuthenticated.next(false);
  }
}
