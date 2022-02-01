import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoraService} from "../../servicios/http/productora.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {productoraJphInterface} from "../../servicios/http/interfaces/productora.interface";

@Component({
  selector: 'app-ruta-productora-info',
  templateUrl: './ruta-productora-info.component.html',
  styleUrls: ['./ruta-productora-info.component.scss']
})
export class RutaProductoraInfoComponent implements OnInit {
  idProductora = 0
  productoraActual?: productoraJphInterface
  formGroup?: FormGroup

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly productoraService: ProductoraService,
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
          nombre: new FormControl(
            {
              value: this.productoraActual ? this.productoraActual.nombre : '',
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

  prepararProductora(){
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

  actualizarProductora(){
    if(this.productoraActual){
      const valoresAActualizar = this.prepararProductora()
      const actualizar$ = this.productoraService
        .actualizarPorId(
          this.productoraActual.id,
          valoresAActualizar
        );
      actualizar$
        .subscribe(
          {
            next: (datos) => {
              console.log({datos})
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



}
