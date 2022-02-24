import { Component, OnInit } from '@angular/core';
import {WebsocketsService} from "../../../../../ejemplo/src/app/services/websockets/websockets.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ruta-lobby',
  templateUrl: './ruta-lobby.component.html',
  styleUrls: ['./ruta-lobby.component.scss']
})
export class RutaLobbyComponent implements OnInit {

  nombre = ''
  salaId = 0;
  arregloSuscripciones: Subscription[] = []
  mensaje = ''
  arregloMensajes: {
    salaId: number
    nombre: string
    mensaje: string
  }[] = []

  constructor(private readonly activateRoute: ActivatedRoute,
              private readonly websocketsService: WebsocketsService) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(
        {
          next: (parametrosRuta)=>{
            this.salaId = parametrosRuta['salaId']
            //this.nombre = parametrosRuta['nombre']
            console.log(parametrosRuta)
            this.logicaSalas(this.salaId, this.nombre)
          }
        }
      )
  }

  enviarMensaje(){
    this.arregloMensajes.push(
      {
        mensaje: this.mensaje,
        salaId: +this.salaId,
        nombre: this.nombre,
      }
    )
    this.websocketsService.ejecutarEventoEnviarMensaje(+this.salaId, this.nombre, this.mensaje)
    this.mensaje = ''
  }

  private logicaSalas(salaId: number, nombre: string) {
    this.desSuscribirse()
    const respEscucharEventoMensajeSala: Subscription = this.websocketsService.escucharEventoMensajeSala()
      .subscribe(
        {
          next: (data: any) => {
            this.arregloMensajes.push({
              mensaje:data.mensaje,
              salaId: data.salaId,
              nombre: data.nombre,
            })
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    const respEscucharEventoUnirseSala: Subscription = this.websocketsService.escucharEventoUnirseSala()
      .subscribe(
        {
          next: (data) => {
            console.log('Alguien entro', data)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    this.arregloSuscripciones.push(respEscucharEventoUnirseSala)
    this.arregloSuscripciones.push(respEscucharEventoMensajeSala)
    this.websocketsService.ejecutarEventoUnirseSala(+this.salaId, this.nombre)
  }

  desSuscribirse(){
    this.arregloSuscripciones.forEach(
      (suscripcion) => {
        suscripcion.unsubscribe()
      }
    )
    this.arregloSuscripciones = []
  }
}
