import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {productoraJphInterface} from "./interfaces/productora.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {productoraCreateJphInterface} from "./interfaces/productora-create.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductoraService{


  constructor(private readonly httpClient: HttpClient) {

  }

  buscarTodos(parametrosConsulta?:any): Observable<productoraJphInterface[]>{
    const url = environment.urlJPC + '/Productoras';
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
          (resultadoEnData) => resultadoEnData as productoraJphInterface[]
        )
      );
  }
  buscarUno(idUsuario: number):Observable<productoraJphInterface>{
    const url = environment.urlJPC + '/Productoras/' + idUsuario;
    return this.httpClient
      .get(url,
        {
          responseType: "json"
        })
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as productoraJphInterface
        )
      );
  }

  actualizarPorId(idUsuario:number, datosActualizar: productoraCreateJphInterface): Observable<productoraJphInterface>{
    const url = environment.urlJPC + '/Productoras/' + idUsuario;
    return this.httpClient.put(url, datosActualizar)
      .pipe(
        map(
        (resultadoEnData) => resultadoEnData as productoraJphInterface
        )
      )
  }

}
