import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {peliculaCreateJphInterface} from "../../../servicios/http/interfaces/pelicula-create.interface";
import {PeliculaService} from "../../../servicios/http/pelicula.service";
import {productoraJphInterface} from "../../../servicios/http/interfaces/productora.interface";
import {ProductoraService} from "../../../servicios/http/productora.service";

@Component({
  selector: 'app-ruta-pelicula-nuevo',
  templateUrl: './ruta-pelicula-nuevo.component.html',
  styleUrls: ['./ruta-pelicula-nuevo.component.scss']
})
export class RutaPeliculaNuevoComponent implements OnInit {

  formGroup: FormGroup
  pelicula?: peliculaCreateJphInterface

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

  idProductora?: number
  productoras:productoraJphInterface[] = []

  constructor(private readonly formBuilder: FormBuilder,
              private readonly peliculaService: PeliculaService,
              private readonly productoraService: ProductoraService) {
    this.formGroup = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        genero: ['', Validators.required],
        duracion: [Validators.required],
        director: ['', Validators.required],
        // productora: ['', Validators.required],
      }
    )
  }

  ngOnInit(): void {
    this.buscarProductoras()
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

  crearPelicula(){
    this.pelicula = {
      nombre: this.formGroup.get('nombre')?.value,
      genero: this.formGroup.get('genero')?.value,
      duracion: this.formGroup.get('duracion')?.value,
      director: this.formGroup.get('director')?.value,
      productora: this.idProductora
    }
    this.peliculaService.crear(this.pelicula)
      .subscribe(
        {
          next: (data) => {
            console.log(data)
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
  }

  selectChangeHandler (event: any) {
    this.idProductora = event.target.value;
  }

}
