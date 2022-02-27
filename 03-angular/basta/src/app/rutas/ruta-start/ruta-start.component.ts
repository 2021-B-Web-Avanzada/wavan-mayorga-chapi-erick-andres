import {Component, HostListener, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {WebsocketsService} from "../../servicios/websockets/websockets.service";
import {SalaInterface} from "../../servicios/interfaces/sala-interface";
import {campoInterface} from "../../servicios/interfaces/campo-interface";
import {FormControl, FormGroup} from "@angular/forms";
import {RespuestasInterface} from "../../servicios/interfaces/respuestas-interface";
import {CampoEvaluacionInterface} from "../../servicios/interfaces/campo-evaluacion-interface";

@Component({
  selector: 'app-ruta-start',
  templateUrl: './ruta-start.component.html',
  styleUrls: ['./ruta-start.component.scss']
})
export class RutaStartComponent implements OnInit{
  // Datos de la partida
  nombre = ''
  salaId = 0;
  datosJuego:SalaInterface = {} as SalaInterface
  host = false
  camposLetras: campoInterface[] =  [] as campoInterface[]
  formGroup: FormGroup = new FormGroup({})

  // Eventos
  arregloSuscripciones: Subscription[] = []

  // Chat y Eventos
  arregloMensajes: {
    salaId: number
    nombre: string
    mensaje: string
    tipo: string
  }[] = []
  mensaje = '';

  //Navegacion de componentes
  view2 = [true, false, false, false] // lobby, letra, evaluacion, resultados
  contentBotones2 = ['Iniciar', 'Basta', 'Evaluar', 'Reiniciar']
  botonSeleccionado = ''

  // Ronda
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  selectLetra = ''

  // Evaluacion
  respuestas: RespuestasInterface[] = []
  camposEvaluacion: CampoEvaluacionInterface[] = []
  formGroupRespuestas: FormGroup = new FormGroup({})

  // Resultados
  resultados: RespuestasInterface[] = []
  usuariosConectados: {
    nombre: string,
    puntos: number
  }[] = []

  constructor(private readonly activateRoute: ActivatedRoute,
              private readonly websocketsService: WebsocketsService,
              private readonly router: Router) {
    this.botonSeleccionado = this.contentBotones2[0]
    const data = this.router.getCurrentNavigation()?.extras.state
    if(data != undefined){
      this.datosJuego = data['data'] as SalaInterface
      this.host = data['host']
      //console.log(this.datosJuego.datosJuego.categories)
      this.crearCamposLetras()
    }
  }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(
        {
          next: (parametrosRuta)=>{
            this.salaId = parametrosRuta['salaId']
            this.nombre = parametrosRuta['nombre']
            //console.log(parametrosRuta)
            this.escucharEventosSalas()
          }
        }
      )
    this.usuariosConectados.push({
      nombre: this.nombre,
      puntos: 0
    })
  }

  private crearCamposLetras() {
    if(this.datosJuego.datosJuego.categories.length != 0){
      for(let campo of this.datosJuego.datosJuego.categories){
        this.formGroup.addControl(campo, new FormControl(''))
        this.camposLetras.push(
          {
            titulo: campo.toLowerCase(),
            nombre: campo,
            tipo: 'text',
            placeholder: '',
            requeridoM: '',
            longitudM: ''
          }
        )
      }
    }
  }

  comentar() {
    this.arregloMensajes.push(
      {
        mensaje: this.mensaje,
        salaId: +this.salaId,
        nombre: this.nombre,
        tipo: 'comentario'
      }
    )
    this.websocketsService.ejecutarEventoEnviarMensaje(+this.salaId, this.nombre, this.mensaje)
    this.mensaje = ''
  }

  notificarEventoUsuario(tipo: string, nombre: any, mensaje: string) {
    this.arregloMensajes.push(
      {
        salaId: +this.salaId,
        mensaje: mensaje,
        nombre: nombre,
        tipo: tipo,
      }
    )
    this.websocketsService.ejecutarEventoEnviarMensaje(+this.salaId, this.nombre, this.mensaje)
    this.mensaje = ''
  }

  private escucharEventosSalas() {
    this.desSuscribirse()
    const respEscucharEventoDatosJuego: Subscription = this.websocketsService.escucharEventoEnviarDatosJuego()
      .subscribe(
        {
          next: (data: any) => {
            //console.log(data)
            this.datosJuego = data as SalaInterface
            this.usuariosConectados.push({
              nombre: this.datosJuego.host,
              puntos: 0
            })
            this.crearCamposLetras()
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    const respEscucharEventoIniciarPartida: Subscription = this.websocketsService.escucharEventoIniciarPartida()
      .subscribe(
        {
          next: () => {
            this.cambiarEstados(1)
            //console.log('La partida ha iniciado')
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    const respEscucharEventoMensajeSala: Subscription = this.websocketsService.escucharEventoMensajeSala()
      .subscribe(
        {
          next: (data: any) => {
            if(data.mensaje != ''){
              this.arregloMensajes.push({
                mensaje:data.mensaje,
                salaId: data.salaId,
                nombre: data.nombre,
                tipo: 'comentario'
              })
            }
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    const respEscucharEventoUnirseSala: Subscription = this.websocketsService.escucharEventoUnirseSala()
      .subscribe(
        {
          next: (data: any) => {
            this.notificarEventoUsuario('entrada', '', data.mensaje)
            this.usuariosConectados.push(data.usuario)
            //console.log('Alguien entro', data)
            this.websocketsService.ejecutarEventoEnviarDatosJuego(+this.salaId, this.datosJuego)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    const respEscucharEventoAbandonarSala: Subscription = this.websocketsService.escucharEventoAbandonarSala()
      .subscribe(
        {
          next:(data: any) => {
            this.notificarEventoUsuario('salida', '', data.mensaje)
            console.log(data.mensaje)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    const respEscucharEventoDecirBasta: Subscription = this.websocketsService.escucharEventoDecirBasta()
      .subscribe(
        {
          next:(data: any) => {
            this.notificarEventoUsuario('basta', '', data.mensaje)
            const respuestaActual = this.tomarValores()
            this.agregarRespuesta(respuestaActual)
            this.websocketsService.ejecutarEventoEnviarRespuestas(+this.salaId, respuestaActual)
            this.cambiarEstados(2)
            console.log(data.mensaje)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
    const respEscucharEventoEnviarLetra: Subscription = this.websocketsService.escucharEventoEnviarLetra()
      .subscribe(
        {
          next:(data: any) => {
            this.selectLetra = data as string
            console.log(data)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )

    const respEscucharEventoEnviarRespuestas: Subscription = this.websocketsService.escucharEventoEnviarRespuestas()
      .subscribe(
        {
          next:(data: any) => {
            const respuestasAdversario = data as RespuestasInterface
            console.log(respuestasAdversario)
            this.agregarRespuesta(respuestasAdversario)
            this.crearFormRespuestas()
            this.cambiarEstados(3)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )

    this.arregloSuscripciones.push(respEscucharEventoIniciarPartida)
    this.arregloSuscripciones.push(respEscucharEventoDatosJuego)
    this.arregloSuscripciones.push(respEscucharEventoUnirseSala)
    this.arregloSuscripciones.push(respEscucharEventoMensajeSala)
    this.arregloSuscripciones.push(respEscucharEventoAbandonarSala)
    this.arregloSuscripciones.push(respEscucharEventoDecirBasta)
    this.arregloSuscripciones.push(respEscucharEventoEnviarLetra)
    this.arregloSuscripciones.push(respEscucharEventoEnviarRespuestas)

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

  cambiarComponente() {
    if(this.view2[0] || this.view2[3]){
      this.selectLetra = this.letras[Math.floor(Math.random() * this.letras.length)];
      this.websocketsService.ejecutarEventoEnviarLetra(+this.salaId, this.selectLetra)
      this.websocketsService.ejecutarEventoIniciarPartida(+this.salaId)
      this.cambiarEstados(1)
    }else if(this.view2[1]){
      this.websocketsService.ejecutarEventoDecirBasta(+this.salaId, this.nombre)
      const respuestaActual = this.tomarValores()
      console.log(respuestaActual)
      this.agregarRespuesta(respuestaActual)
      this.websocketsService.ejecutarEventoEnviarRespuestas(+this.salaId, respuestaActual)
      this.notificarEventoUsuario('basta', '', this.nombre + ' ha dicho Basta!')
      this.cambiarEstados(2)
      //TODO: Analizar lógica
      this.crearFormRespuestas()
    } else if (this.view2[2]){
      this.sumarPuntos()
      this.cambiarEstados(3)
    }
  }

  cambiarEstados(view: number){
    for(let i=0; i<this.view2.length; i++){
      this.view2[i] = i === view;
      if(this.view2[i]){
        this.botonSeleccionado = this.contentBotones2[i]
      }
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event:any) {
    //console.log(this.nombre + " salio de la reunion")
    this.websocketsService.ejecutarEventoAbandonarSala(+this.salaId, this.nombre)
  }


  private tomarValores() {
    let resp = []
    for(let campo of this.datosJuego.datosJuego.categories){
      let campoValor = this.formGroup.get(campo)?.value
      resp.push({campo: campo, valor: campoValor})
    }
    return {
      usuario: this.nombre,
      resp: resp
    } as RespuestasInterface
  }

  private agregarRespuesta(respuesta: RespuestasInterface){
    let puedeAgregar = true
    for(let resp of this.respuestas){
      if(resp.usuario === respuesta.usuario){
        puedeAgregar = false
      }
    }
    if(puedeAgregar){
      this.respuestas.push(respuesta)
    }
  }

  private crearFormRespuestas() {
    this.crearCamposEvaluacion()
    for(let respEvaluacion of this.camposEvaluacion){
      for(let usuario of respEvaluacion.resp){
        let nombreCampo = respEvaluacion + "-" + usuario.usuario
        this.formGroupRespuestas.addControl(nombreCampo, new FormControl(true))
      }
    }
  }

  private crearCamposEvaluacion(){
    let campos = []
    let valoresUsuario: {
      usuario: string,
      valor: string
    }[] = []

    for(let campoAux of this.respuestas[0].resp){
      valoresUsuario = []
      campos.push(campoAux.campo)
      for(let respuesta of this.respuestas){
        for(let campoResp of respuesta.resp){
          if(campoResp.campo == campoAux.campo){
            valoresUsuario.push(
              {
                usuario: respuesta.usuario,
                valor: campoAux.valor
              }
            )
          }
        }
      }
      this.camposEvaluacion.push(
        {
          campo: campoAux.campo,
          resp: valoresUsuario
        }
      )
    }
  }

  private sumarPuntos() {
    
  }
}
