import { Component } from '@angular/core';
import {WebsocketsService} from "./services/websockets/websockets.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplo';
  constructor(private readonly websocketService: WebsocketsService) {
  }

  eventoHola(){
    this.websocketService.ejecutarEventoHola()
      .subscribe(
        {
          next: (data) => {
            console.log({data, mensaje: 'Respuesta Hola'})
          },
          error: (error) => {
            console.log(error)
          }
        }
      )
  }
}
