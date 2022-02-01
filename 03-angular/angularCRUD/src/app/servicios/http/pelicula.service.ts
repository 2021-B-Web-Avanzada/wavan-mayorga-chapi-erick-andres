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

  constructor(private readonly httpClient: HttpClient) {

  }

  buscarTodos(parametrosConsulta?:any): Observable<peliculaJphInterface[]>{
    const url = environment.urlJPC + '/Peliculas';
    Object
      .keys(parametrosConsulta)
      .forEach( k => {
        if(!parametrosConsulta[k]){
          delete parametrosConsulta[k]
        }
      })
    return this.httpClient
      .get(
        url,
        {
          params: parametrosConsulta,
          responseType: "json"
        }
      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as peliculaJphInterface[]
        )
      );
  }
  buscarUno(idPelicula: number):Observable<peliculaJphInterface>{
    const url = environment.urlJPC + '/Peliculas/' + idPelicula;
    return this.httpClient
      .get(url,
        {
          responseType: "json"
        })
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as peliculaJphInterface
        )
      );
  }

  actualizarPorId(idPelicula:number, datosActualizar: peliculaCreateJphInterface): Observable<peliculaJphInterface>{
    const url = environment.urlJPC + '/Peliculas/' + idPelicula;
    return this.httpClient.put(url, datosActualizar)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as peliculaJphInterface
        )
      )
  }
}
