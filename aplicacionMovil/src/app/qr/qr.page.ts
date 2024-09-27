import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  nombreRecuperado: string = '';
  constructor() { }

  ngOnInit() {
    const nombre = localStorage.getItem('nombreUsuario');
    this.nombreRecuperado = nombre ? nombre : '';
    console.log('Nombre recuperado:', this.nombreRecuperado);
  }
}
