import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductoraService} from "../../../servicios/http/productora.service";
import {productoraCreateJphInterface} from "../../../servicios/http/interfaces/productora-create.interface";

@Component({
  selector: 'app-ruta-productora-nuevo',
  templateUrl: './ruta-productora-nuevo.component.html',
  styleUrls: ['./ruta-productora-nuevo.component.scss']
})
export class RutaProductoraNuevoComponent implements OnInit {

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
  productora?: productoraCreateJphInterface

  constructor(private readonly formBuilder: FormBuilder,
              private readonly productoraService: ProductoraService) {
    this.formGroup = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        ciudad: ['', Validators.required],
        fundacion: ['', Validators.required],
        ceo: ['', Validators.required],
        parent: ['', Validators.required],
      }
    )
  }

  ngOnInit(): void {
  }

  crearProductora(){
    this.productora = {
      nombre: this.formGroup.get('nombre')?.value,
      ciudad: this.formGroup.get('ciudad')?.value,
      fundacion: this.formGroup.get('fundacion')?.value,
      ceo: this.formGroup.get('ceo')?.value,
      parent: this.formGroup.get('parent')?.value,
    }
    this.productoraService.crear(this.productora)
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

}
