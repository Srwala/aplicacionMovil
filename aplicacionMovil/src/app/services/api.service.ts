import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://randomuser.me/api/?results=30';

  constructor(private http: HttpClient) {}

  private getRandomStudents(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  private saveStudentsToLocal(students: any) {
    localStorage.setItem('randomStudents', JSON.stringify(students));
  }

  private getUsersFromLocal() {
    const users = localStorage.getItem('randomStudents');
    return users ? JSON.parse(users) : null;
  }
  loadStudents(): Observable<any[]> {
    const localUsers = this.getUsersFromLocal();
    if (localUsers) {
      return of(localUsers);
    } else {
      return this.getRandomStudents().pipe(
        map((response) => {
          this.saveStudentsToLocal(response.results);
          return response.results;
        }),
        catchError((error) => {
          console.error('Error fetching student:', error);
          return of([]);
        })
      );
    }
  }
}
