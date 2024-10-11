import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL de la API

  constructor(private http: HttpClient) {}

  // Método GET para obtener todos los posts
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método GET para obtener un post por ID
  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método POST para crear un nuevo post
  createPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  // Método PUT para actualizar un post por ID
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  // Método DELETE para eliminar un post por ID
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

