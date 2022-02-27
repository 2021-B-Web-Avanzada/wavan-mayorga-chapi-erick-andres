import { Component, OnInit } from '@angular/core';
import {productoraJphInterface} from "../../../servicios/http/interfaces/productora.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoraService} from "../../../servicios/http/productora.service";

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
          //console.log(queryParams);
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

  eliminarProductora(idProductora: number){
    const eliminar$ = this.productoraService.eliminarPorId(idProductora);
    eliminar$.subscribe(
      {
        next: (datos) => {
          console.log({datos})
          //const url = ['/productoras']
          //this.router.navigate(url)
          this.refresh()
        },
        error: (error) => {
          console.error({error})
        }
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }

  mostrarPeliculas(idProductora: number){
    this.router.navigate(
      ['/peliculas'], // armamos la URL /app/usuario
      {
        queryParams: {
          productora: idProductora // ?name=Adrian
        }
      });
  }

  irACrear(){
    const url = ['/productoras', 'nuevo']
    this.router.navigate(url)
  }



}
