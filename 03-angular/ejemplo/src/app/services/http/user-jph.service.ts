import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserJphInterface} from "./interfaces/user-jph.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'any'
})
export class UserJphService{
  constructor(private readonly httpClient: HttpClient) {

  }

  buscarTodos(): Observable<UserJphInterface[]>{
    const url = environment.urlJPC + '/users/';
    return this.httpClient.get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as UserJphInterface[]
        )
      )
  }

  buscarUno(idUsuario:number): Observable<UserJphInterface>{
    const url = environment.urlJPC + '/users/' + idUsuario;
    return this.httpClient.get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as UserJphInterface
        )
      )
  }

}
