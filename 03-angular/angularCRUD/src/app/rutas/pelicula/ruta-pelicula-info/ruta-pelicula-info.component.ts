import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {peliculaJphInterface} from "../../../servicios/http/interfaces/pelicula.interface";
import {PeliculaService} from "../../../servicios/http/pelicula.service";
import {productoraJphInterface} from "../../../servicios/http/interfaces/productora.interface";
import {ProductoraService} from "../../../servicios/http/productora.service";

@Component({
  selector: 'app-ruta-pelicula-info',
  templateUrl: './ruta-pelicula-info.component.html',
  styleUrls: ['./ruta-pelicula-info.component.scss']
})
export class RutaPeliculaInfoComponent implements OnInit {

  idPelicula = 0
  peliculaActual?: peliculaJphInterface
  formGroup: FormGroup
  idProductora?: number
  productoras:productoraJphInterface[] = []


  campos = [
    {
      titulo: 'Nombre', nombre: 'nombre', tipo: 'text', placeholder: 'Ingrese un nombre de película', requeridoM: 'El nombre es requerido', longitudM: ''
    },
    {
      titulo: 'Género', nombre: 'genero', tipo: 'text', placeholder: 'Ingrese un género de película', requeridoM: 'El género es requerido', longitudM: ''
    },
    {
      titulo: 'Duración', nombre: 'duracion', tipo: 'number', placeholder: 'Ingresa el valor entero en min', requeridoM: 'La duración de la película es requerida', longitudM: ''
    },
    {
      titulo: 'Director', nombre: 'director', tipo: 'text', placeholder: 'Ingrese el nombre del director principal', requeridoM: 'El nombre del director es requerido', longitudM: ''
    },
    // {
    //   titulo: 'Productora', nombre: 'productora', tipo: 'text', placeholder: 'Ingrese la productora de la película', requeridoM: 'La productora es requerida', longitudM: ''
    // },
  ]

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly peliculaService: PeliculaService,
              private readonly productoraService: ProductoraService,
              private readonly formBuilder: FormBuilder,
              private readonly router: Router) {
    this.formGroup = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        genero: ['', Validators.required],
        duracion: [Validators.required],
        director: ['', Validators.required],
        productora: [Validators.required],
      }
    )
    this.buscarProductoras()
  }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params;
    parametroRuta$
      .subscribe({
        next:(parametrosRuta)=>{
          //console.log(parametrosRuta);
          this.idPelicula = parametrosRuta['idPelicula'];
          this.buscarPelicula(this.idPelicula)
        }
      })
  }

  buscarProductoras() {
    this.productoraService.buscarTodos({})
      .subscribe({
          next: (datos) => { // try then
            this.productoras = datos
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
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
          ),
          genero: new FormControl(
            {
              value: this.peliculaActual ? this.peliculaActual.genero : '',
              disabled: false
            },
            [
              Validators.required, //min,max,minLenght,email,patterns
              //Validators.minLength(3)
            ]
          ),
          duracion: new FormControl(
            {
              value: this.peliculaActual ? this.peliculaActual.duracion : '',
              disabled: false
            },
            [
              Validators.required, //min,max,minLenght,email,patterns
              //Validators.minLength(3)
            ]
          ),
          director: new FormControl(
            {
              value: this.peliculaActual ? this.peliculaActual.director : '',
              disabled: false
            },
            [
              Validators.required, //min,max,minLenght,email,patterns
              //Validators.minLength(3)
            ]
          ),
          productora: new FormControl(
            {
              value: this.peliculaActual ? this.peliculaActual.productora : '',
              disabled: false
            },
            [
              Validators.required, //min,max,minLenght,email,patterns
              //Validators.minLength(3)
            ]
          ),
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
  selectChangeHandler (event: any) {
    this.idProductora = event.target.value;
  }

  compareFn(c1: any, c2:any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
