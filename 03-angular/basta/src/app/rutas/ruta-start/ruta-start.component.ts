import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {WebsocketsService} from "../../servicios/websockets/websockets.service";

@Component({
  selector: 'app-ruta-start',
  templateUrl: './ruta-start.component.html',
  styleUrls: ['./ruta-start.component.scss']
})
export class RutaStartComponent implements OnInit {
  nombre = ''
  salaId = 0;
  arregloSuscripciones: Subscription[] = []
  mensaje = '';
  arregloMensajes: {
    salaId: number
    nombre: string
    mensaje: string
  }[] = []

  mensajesEventosUsuarios: {
    salaId: number,
    mensaje: string,
    tipo: 'entrada' | 'salida'
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
            this.nombre = 'Mayerick'
            console.log(parametrosRuta)
            this.logicaSalas()
          }
        }
      )
  }
    comentar() {
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

  notificarEventoUsuario(tipoEvento: 'entrada'| 'salida') {
    this.mensajesEventosUsuarios.push(
      {
        salaId: +this.salaId,
        mensaje: this.nombre + 'Se unió a la sala',
        tipo: tipoEvento,
      }
    )
    this.websocketsService.ejecutarEventoEnviarMensaje(+this.salaId, this.nombre, this.mensaje)
    this.mensaje = ''
  }

  private logicaSalas() {
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
            this.notificarEventoUsuario('entrada')
            console.log('Alguien entro', data)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    const respEscucharEventoAbandonarSala: Subscription = this.websocketsService.escucharEventoAbandonarSala()
      .subscribe(
        {
          next:(data) => {
            this.notificarEventoUsuario('salida')
            console.log('Alguien abandono la sala', data)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )

    this.arregloSuscripciones.push(respEscucharEventoUnirseSala)
    this.arregloSuscripciones.push(respEscucharEventoMensajeSala)
    this.arregloSuscripciones.push(respEscucharEventoAbandonarSala)
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
