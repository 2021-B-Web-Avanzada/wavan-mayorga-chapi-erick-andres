import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {productoraJphInterface} from "./interfaces/productora.interface";
import {environment} from "../../../environments/environment";
import {productoraCreateJphInterface} from "./interfaces/productora-create.interface";
import {peliculaJphInterface} from "./interfaces/pelicula.interface";
import {peliculaCreateJphInterface} from "./interfaces/pelicula-create.interface";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  url = environment.urlJPC + '/Peliculas'
  constructor(private readonly httpClient: HttpClient) {

  }

  crear(entidad: peliculaCreateJphInterface): Observable<peliculaJphInterface>{
    return this.httpClient.post(this.url,entidad,{})
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as peliculaJphInterface
        )
      );
  }

  buscarTodos(parametrosConsulta?:any): Observable<peliculaJphInterface[]>{
    Object
      .keys(parametrosConsulta)
      .forEach( k => {
        if(!parametrosConsulta[k]){
          delete parametrosConsulta[k]
        }
      })
    return this.httpClient.get(this.url,
        {
          params: parametrosConsulta,
        }
      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as peliculaJphInterface[]
        )
      );
  }

  buscarUno(idPelicula: number):Observable<peliculaJphInterface>{
    return this.httpClient.get(this.url + '/' + idPelicula)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as peliculaJphInterface
        )
      );
  }

  actualizarPorId(idPelicula:number, datosActualizar: peliculaCreateJphInterface): Observable<peliculaJphInterface>{
    return this.httpClient.put(this.url + '/' + idPelicula, datosActualizar)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as peliculaJphInterface
        )
      )
  }

  eliminarPorId(idPelicula: number): Observable<peliculaJphInterface> {
    return this.httpClient.delete(this.url  + '/' + idPelicula)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as peliculaJphInterface
        )
      )
  }
}
