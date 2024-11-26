import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  nombreRecuperado: string = '';
  scannedResult: string | null = null;
  isScanning: boolean = false;
  constructor(private platform: Platform) { }

  ngOnInit() {
    const nombre = localStorage.getItem('nombreUsuario');
    this.nombreRecuperado = nombre ? nombre : '';
    console.log('Nombre recuperado:', this.nombreRecuperado);
  }
// Solicita permiso para la cámara
async checkPermission() {
  const status = await BarcodeScanner.checkPermission({ force: true });
  if (status.granted) {
    return true;
  } else if (status.denied) {
    // Si el permiso está denegado, muestra una alerta
    alert('Permiso de cámara denegado. Por favor, habilítalo desde la configuración.');
  }
  return false;
}

// Inicia el escaneo del código QR
async startScan() {
  const hasPermission = await this.checkPermission();
  if (!hasPermission) {
    return;
  }

  this.isScanning = true;
  BarcodeScanner.hideBackground(); // Opcional: oscurecer el fondo de la pantalla

  const result = await BarcodeScanner.startScan(); // Inicia el escaneo

  BarcodeScanner.showBackground(); // Vuelve a mostrar el fondo
  this.isScanning = false;

  if (result?.hasContent) {
    this.scannedResult = result.content;
    alert(`Contenido escaneado: ${this.scannedResult}`);
  } else {
    alert('No se detectó contenido.');
  }
}

// Detener el escaneo
stopScan() {
  BarcodeScanner.stopScan();
  this.isScanning = false;
}

// Manejo del botón "Volver" (opcional para salir del escaneo)
ionViewWillLeave() {
  if (this.isScanning) {
    this.stopScan();
  }
}
}
