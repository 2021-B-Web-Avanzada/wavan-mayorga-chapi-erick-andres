import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {productoraJphInterface} from "./interfaces/productora.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {productoraCreateJphInterface} from "./interfaces/productora-create.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductoraService{

  url = environment.urlJPC + '/Productoras';

  constructor(private readonly httpClient: HttpClient) {

  }

  crear(entidad: productoraCreateJphInterface): Observable<productoraJphInterface>{
    return this.httpClient.post(this.url,entidad,{})
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as productoraJphInterface
        )
      );
  }

  buscarTodos(parametrosConsulta?:any): Observable<productoraJphInterface[]>{
    Object
      .keys(parametrosConsulta)
      .forEach( k => {
        if(!parametrosConsulta[k]){
          delete parametrosConsulta[k]
        }
      })
    return this.httpClient
      .get(
        this.url,
        {
          params: parametrosConsulta
        }
      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as productoraJphInterface[]
        )
      );
  }
  buscarUno(idProductora: number):Observable<productoraJphInterface>{
    return this.httpClient
      .get(this.url + '/' + idProductora)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as productoraJphInterface
        )
      );
  }

  actualizarPorId(idProductora:number, datosActualizar: productoraCreateJphInterface): Observable<productoraJphInterface>{
    return this.httpClient.put(this.url  + '/' + idProductora, datosActualizar)
      .pipe(
        map(
        (resultadoEnData) => resultadoEnData as productoraJphInterface
        )
      )
  }

  eliminarPorId(idProductora:number):Observable<productoraJphInterface>{
    return this.httpClient.delete(this.url  + '/' + idProductora)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as productoraJphInterface
        )
      )
  }

}
