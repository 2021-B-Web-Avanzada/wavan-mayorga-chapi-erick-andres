import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true

  constructor() { }

  ngOnInit(): void {
  }

  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }

}
