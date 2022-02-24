import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";

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


}
