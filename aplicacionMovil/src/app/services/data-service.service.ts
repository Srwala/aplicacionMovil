import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
 
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _storage: Storage| null = null;

  constructor(private http: HttpClient, private storage: Storage) {
    this.init();
   }
   async init(){
    const _storage = await this.storage.create()
    this._storage = _storage;

    await this.loadData();
     }

     async loadData(){
      const estudiantesGuardados = await this.get('estudiantes')
      const profesoresGuardados = await this.get('profesores')

      if(!estudiantesGuardados){
        this.http.get('/assets/data/estudiantes.json').subscribe(async(data: any) => {
          await this.set('estudiantes', data);
        })
      }

      if (!profesoresGuardados){
        this.http.get('/assets/data/profesores.json').subscribe(async(data: any) => {
          await this.set('profesores', data)
        })
      }
     }

     async checkStorage(){
      const estudiantes = await this.get('estudiantes')
      const profesores = await this.get('profesores')

      console.log('Estudiantes Guardados:', estudiantes)
      console.log('Profesores Guardados:', profesores)

      return {estudiantes, profesores}
     }

     set(key:string, value: any){
      return this._storage?.set(key, value)
     }
     get(key: string){
      return this._storage?.get(key)
     }
}
