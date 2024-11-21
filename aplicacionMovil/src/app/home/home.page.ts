import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  estudiantes: any[]= [];
  profesores: any[]= [];

  constructor(private dataService: DataServiceService) {}

    async ngOnInit(){
      const data = await this.dataService.checkStorage();
      this.estudiantes = data.estudiantes || [];
      this.profesores = data.profesores || [];

      console.log('Datos Cargados en la vista' , 
        {estudiantes: this.estudiantes,
          profesores: this.profesores
        }
      )
    }
}
