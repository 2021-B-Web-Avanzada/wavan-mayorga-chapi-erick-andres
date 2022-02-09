import {Component, OnInit} from '@angular/core';
import {WebsocketsService} from "./services/websockets/websockets.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ejemplo';
  constructor(private readonly websocketService: WebsocketsService) {
  }

  eventoHola(){
    this.websocketService.ejecutarEventoHola()
  }

  ngOnInit(): void {
    this.websocketService.escucharEventoHola()
      .subscribe(
        {
          next: (data) => {
            console.log(data)
          },
          error: (error) => {
            console.log(error)
          }
        }
      )
  }
}
