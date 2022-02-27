import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {campoInterface} from "../../servicios/interfaces/campo-interface";

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {
  nombreUsuario = '';

  campos = [{
    titulo: 'Nombre de usuario',
    nombre: 'nombre',
    tipo: 'text',
    placeholder: 'Ingresa un nombre divertido',
    requeridoM: 'El nombre de usuario es requerido',
    longitudM: ''
  }] as campoInterface[]


  formGroup: FormGroup
  constructor(private readonly formBuilder: FormBuilder,
              private readonly router: Router,) {
    this.formGroup =this.formBuilder.group(
      {
        nombre: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  irAnfitrion() {
    const nombre = this.formGroup.get('nombre')?.value
    const ruta = ['/anfitrion', nombre];
    this.router.navigate(ruta)
  }

  irInvitado() {
    const nombre = this.formGroup.get('nombre')?.value
    const ruta = ['/invitado', nombre];
    this.router.navigate(ruta)
  }
}
