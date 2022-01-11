import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true
  arregloUsuarios = [
    {
      id: 1,
      nombre: 'Erick',
      color: '#00BCFF',
      link: 'https://www.supercines.com/cartelera/quito/6-de-diciembre/187',
      linkImagen: 'http://assets.stickpng.com/images/584df3ad6a5ae41a83ddee08.png'
    },
    {
      id: 2,
      nombre: 'Andres',
      color: '007AFF',
      link: 'https://www.epn.edu.ec',
      linkImagen: 'https://static.wikia.nocookie.net/amiibopedia/images/6/6d/Luigi.png/revision/latest?cb=20210109220240&path-prefix=es'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }

}
