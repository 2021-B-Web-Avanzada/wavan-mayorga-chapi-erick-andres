import { Component, OnInit } from '@angular/core';
import {productoraJphInterface} from "../../servicios/http/interfaces/productora.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoraService} from "../../servicios/http/productora.service";
import {peliculaJphInterface} from "../../servicios/http/interfaces/pelicula.interface";
import {PeliculaService} from "../../servicios/http/pelicula.service";

@Component({
  selector: 'app-ruta-pelicula-info',
  templateUrl: './ruta-pelicula-info.component.html',
  styleUrls: ['./ruta-pelicula-info.component.scss']
})
export class RutaPeliculaInfoComponent implements OnInit {

  idPelicula = 0
  peliculaActual?: peliculaJphInterface
  formGroup?: FormGroup

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly peliculaService: PeliculaService,
              private readonly formBuilder: FormBuilder,
              private readonly router: Router) {

  }

  ngOnInit(): void {
    this.prepararFormulario()
    // @ts-ignore
    const cambio$ = this.formGroup.valueChanges
    cambio$.subscribe({
      next: (valor) => {
        if(this.formGroup){
          console.log(valor, this.formGroup)
          if(this.formGroup?.valid){
            console.log('YUPI')
          }else{
            console.log(':(')
          }
        }

      }
    })

    const parametroRuta$ = this.activatedRoute.params;
    parametroRuta$
      .subscribe({
        next:(parametrosRuta)=>{
          console.log(parametrosRuta);
          this.idPelicula = parametrosRuta['idPelicula'];
          this.buscarPelicula(this.idPelicula)
        }
      })
  }

  buscarPelicula(id:number){
    const buscarPeliculaId$ = this.peliculaService.buscarUno(id);
    buscarPeliculaId$
      .subscribe(
        {
          next: (data) => {
            this.peliculaActual = data
            this.prepararFormulario()
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
  }

  prepararFormulario(){
    this.formGroup = this.formBuilder
      .group(
        {
          nombre: new FormControl(
            {
              value: this.peliculaActual ? this.peliculaActual.nombre : '',
              disabled: false
            },
            [
              Validators.required, //min,max,minLenght,email,patterns
              //Validators.minLength(3)
            ]
          )
        }
      )
  }

  prepararPelicula(){
    if(this.formGroup){
      const nombre = this.formGroup.get('nombre')
      if(nombre){
        return {
          nombre: nombre.value
        }
      }
    }
    return {
      nombre: ''
    }
  }

  actualizarPelicula(){
    if(this.peliculaActual){
      const valoresAActualizar = this.prepararPelicula()
      const actualizar$ = this.peliculaService
        .actualizarPorId(
          this.peliculaActual.id,
          valoresAActualizar
        );
      actualizar$
        .subscribe(
          {
            next: (datos) => {
              console.log({datos})
              const url = ['/peliculas']
              this.router.navigate(url)
            },
            error: (error) => {
              console.error({error})
            }
          }
        )
    }
  }
}
