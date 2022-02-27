import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {RespuestasInterface} from "../interfaces/respuestas-interface";
import {CampoEvaluacionInterface} from "../interfaces/campo-evaluacion-interface";

@Injectable(
  {
    providedIn: "root"
  }
)
export class WebsocketsService {
  constructor(private socket: Socket) {
  }

  ejecutarEventoUnirseSala(salaId: number, nombre: string){
    this.socket.emit(
      'unirseSala',{
        nombre, salaId
      }
    )
  }

  escucharEventoUnirseSala(){
    return this.socket.fromEvent('escucharEventoUnirseSala')
  }

  ejecutarEventoIniciarPartida(salaId: number){
    this.socket.emit(
      'iniciarPartida',{
        salaId
      }
    )
  }

  escucharEventoIniciarPartida(){
    return this.socket.fromEvent('escucharEventoIniciarPartida')
  }

  ejecutarEventoEnviarLetra(salaId: number, letra: string){
    this.socket.emit(
      'enviarLetra',{
        salaId, letra
      }
    )
  }

  escucharEventoEnviarLetra(){
    return this.socket.fromEvent('escucharEventoEnviarLetra')
  }

  ejecutarEventoDecirBasta(salaId: number, nombre: string){
    this.socket.emit(
      'decirBasta',{
        nombre, salaId
      }
    )
  }

  escucharEventoDecirBasta(){
    return this.socket.fromEvent('escucharEventoDecirBasta')
  }

  ejecutarEventoAbandonarSala(salaId: number, nombre: string){
    this.socket.emit(
      'abandonarSala',{
        nombre, salaId
      }
    )
  }

  escucharEventoAbandonarSala(){
    return this.socket.fromEvent('escucharEventoAbandonarSala')
  }

  ejecutarEventoEnviarMensaje(salaId: number, nombre: string, mensaje: string){
    this.socket.emit(
      'enviarMensaje',{
        nombre, salaId, mensaje
      }
    )
  }

  escucharEventoMensajeSala(){
    return this.socket.fromEvent('escucharEventoMensajeSala')
  }

  ejecutarEventoEnviarRespuestas(salaId: number, respuestas: CampoEvaluacionInterface[]){
    this.socket.emit(
      'enviarRespuestas',{
        salaId, respuestas
      }
    )
  }

  escucharEventoEnviarRespuestas(){
    return this.socket.fromEvent('escucharEventoEnviarRespuestas')
  }

  ejecutarEventoEnviarDatosJuego(salaId: number, datos: {}){
    this.socket.emit(
      'enviarDatosJuego',{
        salaId, datos
      }
    )
  }

  escucharEventoEnviarDatosJuego(){
    return this.socket.fromEvent('escucharEventoEnviarDatosJuego')
  }

  ejecutarEventoEnviarPuntos(salaId: number, puntos: any){
    this.socket.emit(
      'enviarPuntos',{
        salaId, puntos
      }
    )
  }

  escucharEventoEnviarPuntos(){
    return this.socket.fromEvent('escucharEventoEnviarPuntos')
  }


}
