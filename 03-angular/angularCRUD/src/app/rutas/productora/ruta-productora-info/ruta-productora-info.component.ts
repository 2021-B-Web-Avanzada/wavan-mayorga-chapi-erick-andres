import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoraService} from "../../../servicios/http/productora.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {productoraJphInterface} from "../../../servicios/http/interfaces/productora.interface";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-ruta-productora-info',
  templateUrl: './ruta-productora-info.component.html',
  styleUrls: ['./ruta-productora-info.component.scss'],
  providers: [DatePipe]
})
export class RutaProductoraInfoComponent implements OnInit {
  idProductora = 0
  productoraActual?: productoraJphInterface
  formGroup: FormGroup

  campos = [
    {
      titulo: 'Nombre', nombre: 'nombre', tipo: 'text', placeholder: 'Ingrese un nombre de productora', requeridoM: 'El nombre es requerido', longitudM: ''
    },
    {
      titulo: 'Ciudad', nombre: 'ciudad', tipo: 'text', placeholder: 'Ingrese una ciudad de origen', requeridoM: 'La ciudad es requerida', longitudM: ''
    },
    {
      titulo: 'Fecha de fundación', nombre: 'fundacion', tipo: 'date', placeholder: '', requeridoM: 'La fecha de fundación es requerida', longitudM: ''
    },
    {
      titulo: 'CEO', nombre: 'ceo', tipo: 'text', placeholder: 'Ingrese el nombre del ceo', requeridoM: 'El nombre del ceo es requerido', longitudM: ''
    },
    {
      titulo: 'Parent', nombre: 'parent', tipo: 'text', placeholder: 'Ingrese una empresa parent', requeridoM: 'El parent es requerido', longitudM: ''
    },
  ]

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly productoraService: ProductoraService,
              private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              private datePipe: DatePipe) {
    const parametroRuta = this.activatedRoute.params;
    parametroRuta
      .subscribe({
        next:(parametrosRuta) => {
          this.idProductora = parametrosRuta['idProductora'];
          this.buscarProductora(this.idProductora)
        }
      })

    this.formGroup = this.formBuilder
      .group(
        {
          nombre: [this.productoraActual ? this.productoraActual.nombre : '', Validators.required],
          ciudad: [this.productoraActual ? this.productoraActual.ciudad : '', Validators.required],
          fundacion: [this.datePipe.transform(this.productoraActual?.fundacion, 'yyyy-MM-dd') ?
            this.datePipe.transform(this.productoraActual?.fundacion, 'yyyy-MM-dd') : '', Validators.required],
          ceo: [this.productoraActual ? this.productoraActual.ceo : '', Validators.required],
          parent: [this.productoraActual ? this.productoraActual.parent : '', Validators.required],
        }
      )


  }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params;
    parametroRuta$
      .subscribe({
        next:(parametrosRuta) => {
          this.idProductora = parametrosRuta['idProductora'];
          this.buscarProductora(this.idProductora)
        }
      })
  }

  buscarProductora(id:number){
    const buscarProductoraId$ = this.productoraService.buscarUno(id);
    buscarProductoraId$
      .subscribe(
        {
          next: (data) => {
            this.productoraActual = data
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
          nombre: [this.productoraActual ? this.productoraActual.nombre : '', Validators.required],
          ciudad: [this.productoraActual ? this.productoraActual.ciudad : '', Validators.required],
          fundacion: [this.datePipe.transform(this.productoraActual?.fundacion, 'yyyy-MM-dd') ?
            this.datePipe.transform(this.productoraActual?.fundacion, 'yyyy-MM-dd') : '', Validators.required],
          ceo: [this.productoraActual ? this.productoraActual.ceo : '', Validators.required],
          parent: [this.productoraActual ? this.productoraActual.parent : '', Validators.required],
        }
      )
  }

  prepararProductora(){
    if(this.formGroup){
      const nombre = this.formGroup.get('nombre')
      const ciudad = this.formGroup.get('ciudad')
      const fundacion = this.formGroup.get('fundacion')
      const ceo = this.formGroup.get('ceo')
      const parent = this.formGroup.get('parent')
      if(nombre){
        return {
          id: this.productoraActual?.id,
          nombre: nombre.value,
          ciudad: ciudad?.value,
          fundacion: fundacion?.value,
          ceo: ceo?.value,
          parent: parent?.value
        }
      }
    }
    return {
      id: -1,
      nombre: '',
      ciudad: '',
      fundacion: '',
      ceo: '',
      parent: ''
    }
  }

  actualizarProductora(){
    if(this.productoraActual){
      const valoresAActualizar = this.prepararProductora()
      const actualizar$ = this.productoraService.actualizarPorId(this.productoraActual.id, valoresAActualizar);
      actualizar$
        .subscribe(
          {
            next: (datos) => {
              //console.log({datos})
              const url = ['/productoras']
              this.router.navigate(url)
            },
            error: (error) => {
              console.error({error})
            }
          }
        )
    }
  }


  mostrarPeliculas() {
    const ruta = ['/peliculas']; // /productoras/1
    this.router.navigate(ruta);
  }
}
