import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WebsocketsService} from "../../servicios/websockets/websockets.service";
import {campoInterface} from "../../servicios/interfaces/campo-interface";

@Component({
  selector: 'app-ruta-anfitrion',
  templateUrl: './ruta-anfitrion.component.html',
  styleUrls: ['./ruta-anfitrion.component.scss']
})
export class RutaAnfitrionComponent implements OnInit {
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  nombreUsuario = '';

  categories: string[] = []
  formGroup: FormGroup
  valueChecks = true
  /*
  password = [
    {
      titulo: 'Contraseña', nombre: 'clave', tipo: 'password', placeholder: 'Ingresa una contraseña', requeridoM: 'La contraseña es requerida', longitudM: ''
    }
  ] as campoInterface[]
  */
  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,
              private readonly formBuilder: FormBuilder) {
    this.formGroup =this.formBuilder.group(
      {
        categoria: [],
        //clave: ['', Validators.required],
        A: [true], B: [true], C: [true], D: [true],
        E: [true], F: [true], G: [true], H: [true],
        I: [true], J: [true], K: [false], L: [true],
        M: [true], N: [true], O: [true], P: [true],
        Q: [true], R: [true], S: [true], T: [true],
        U: [true], V: [true], W: [false], X: [false],
        Y: [false], Z: [false],
        rondas: [Validators.required],
        jugadores: [Validators.required],
      }
    )
  }

  ngOnInit(): void {
    this.formGroup.controls['rondas'].setValue(1)
    this.formGroup.controls['jugadores'].setValue(2)
    const parametroRuta$ = this.activatedRoute.params;
    parametroRuta$
      .subscribe({
        next:(parametrosRuta) => {
          this.nombreUsuario = parametrosRuta['nombre'];
        }
      })
  }

  crearSala() {
    const salaId = Math.floor(Math.random() * (2999 - 2001 + 1)) + 2001;
    const passwd = this.formGroup.get('clave')?.value
    const rondas = this.formGroup.get('rondas')?.value
    const jugadores = this.formGroup.get('jugadores')?.value
    let letrasValidas = []
    for (let letra of this.letras){
      const letraForm = this.formGroup.get(letra)?.value
      if(letraForm){
        letrasValidas.push(letra)
      }
    }

    const datosJuego = {
      rondas: rondas,
      jugadores: jugadores,
      categories: this.categories,
      letras: letrasValidas
    }

    const datosSala = {
      salaId: salaId,
      host: this.nombreUsuario,
      datosJuego: datosJuego,
      usuarios: [
        {
          nombre: this.nombreUsuario,
          puntos: 0
        }
      ]
    }
    const ruta = '/start/' + this.nombreUsuario + '/' + salaId
    this.router.navigateByUrl(ruta,
      { state: { data: datosSala, host: true} });
  }

  agregarCategoria() {
    const categoria = this.formGroup.get('categoria')?.value as string
    this.formGroup.controls['categoria'].setValue('')
    this.categories.push(categoria.toLowerCase())
  }

  selectChangeHandler(event: any) {
    const valor = event.target.value;
  }
}
