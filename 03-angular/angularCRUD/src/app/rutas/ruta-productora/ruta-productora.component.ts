import { Component, OnInit } from '@angular/core';
import {productoraJphInterface} from "../../servicios/http/interfaces/productora.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoraService} from "../../servicios/http/productora.service";

@Component({
  selector: 'app-ruta-productoraService',
  templateUrl: './ruta-productora.component.html',
  styleUrls: ['./ruta-productora.component.scss']
})

export class RutaProductoraComponent implements OnInit {
  arreglo: productoraJphInterface[] = []
  buscarProductora = '';

  constructor(private readonly productoraService: ProductoraService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute.queryParams;

    parametrosConsulta$.subscribe(
      {
        next: (queryParams) => {
          console.log(queryParams);
          this.buscarProductora = queryParams['nombre']
          this.buscarProductoras()
        }
      }
    )
  }

  actualizarParametrosDeConsulta() {
    this.router.navigate(
        ['/productoras'], // armamos la URL /app/usuario
        {
          queryParams: {
            nombre: this.buscarProductora // ?name=Adrian
          }
        });
  }

  buscarProductoras() {
    this.productoraService
      .buscarTodos({
        nombre: this.buscarProductora
      })
      .subscribe({
          next: (datos) => { // try then
            this.arreglo = datos;
            this.buscarProductora = '';
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

  gestionarProductora(idProductora: number) {
    const ruta = ['/productoras' , idProductora]; // /productoras/1
    this.router.navigate(ruta);
  }

  testAPI(){
    /*
    const url = "https://localhost:44335/api/Productoras";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status)
        console.log(xhr.responseText);
      }};

    xhr.send();

     */

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }


}
