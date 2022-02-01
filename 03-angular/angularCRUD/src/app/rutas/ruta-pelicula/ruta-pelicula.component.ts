import { Component, OnInit } from '@angular/core';
import {productoraJphInterface} from "../../servicios/http/interfaces/productora.interface";
import {ProductoraService} from "../../servicios/http/productora.service";
import {ActivatedRoute, Router} from "@angular/router";
import {peliculaJphInterface} from "../../servicios/http/interfaces/pelicula.interface";
import {PeliculaService} from "../../servicios/http/pelicula.service";

@Component({
  selector: 'app-ruta-pelicula',
  templateUrl: './ruta-pelicula.component.html',
  styleUrls: ['./ruta-pelicula.component.scss']
})
export class RutaPeliculaComponent implements OnInit {

  arreglo: peliculaJphInterface[] = []
  buscarPelicula = '';

  constructor(private readonly peliculaService: PeliculaService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute.queryParams;

    parametrosConsulta$.subscribe(
      {
        next: (queryParams) => {
          console.log(queryParams);
          this.buscarPelicula = queryParams['nombre']
          this.buscarPeliculas()
        }
      }
    )
  }

  actualizarParametrosDeConsulta() {
    this.router.navigate(
      ['/peliculas'], // armamos la URL /app/usuario
      {
        queryParams: {
          nombre: this.buscarPelicula // ?name=Adrian
        }
      });
  }

  buscarPeliculas() {
    this.peliculaService
      .buscarTodos({
        nombre: this.buscarPelicula
      })
      .subscribe({
          next: (datos) => { // try then
            this.arreglo = datos;
            this.buscarPelicula = '';
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

  gestionarProductora(idPelicula: number) {
    const ruta = ['/peliculas' , idPelicula]; // /productoras/1
    this.router.navigate(ruta);
  }

}
