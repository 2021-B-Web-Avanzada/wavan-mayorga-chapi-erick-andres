import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable(
  {
    providedIn: "root"
  }
)
export class WebsocketsService {
  constructor(private socket: Socket) {
  }

  ejecutarEventoHola(): Observable<any>{
    return this.socket.emit('hola',{
      nombre: 'Erick'
    })
  }
}
