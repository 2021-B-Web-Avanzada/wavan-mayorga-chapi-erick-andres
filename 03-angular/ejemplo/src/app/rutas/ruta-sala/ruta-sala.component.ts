import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketsService} from "../../services/websockets/websockets.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ruta-sala',
  templateUrl: './ruta-sala.component.html',
  styleUrls: ['./ruta-sala.component.scss']
})
export class RutaSalaComponent implements OnInit, OnDestroy {

  nombre = ''
  salaId = 0;
  arregloSuscripciones: Subscription[] = []
  mensaje = ''
  arregloMensajes: {
    salaId: number
    nombre: string
    mensaje: string
    posicion: 'izq'|'der'
  }[] = []

  constructor(private readonly activateRoute: ActivatedRoute,
              private readonly websocketsService: WebsocketsService) {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('Init')
    this.activateRoute.params
      .subscribe(
        {
          next: (parametrosRuta)=>{
            this.salaId = parametrosRuta['salaId']
            this.nombre = parametrosRuta['nombre']
            console.log(parametrosRuta)
            this.logicaSalas(this.salaId, this.nombre)
          }
        }
      )
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }

  enviarMensaje(){
    this.arregloMensajes.push(
      {
        mensaje: this.mensaje,
        salaId: +this.salaId,
        nombre: this.nombre,
        posicion: 'izq'
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
              posicion: data.nombre === this.nombre ? 'izq' : 'der'
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
