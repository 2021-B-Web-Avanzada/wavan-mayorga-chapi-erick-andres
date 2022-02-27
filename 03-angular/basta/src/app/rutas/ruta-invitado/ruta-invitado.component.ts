import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {campoInterface} from "../../servicios/interfaces/campo-interface";

@Component({
  selector: 'app-ruta-invitado',
  templateUrl: './ruta-invitado.component.html',
  styleUrls: ['./ruta-invitado.component.scss']
})
export class RutaInvitadoComponent implements OnInit {
  formGroup: FormGroup
  nombreUsuario = ''
  campos = [
    {
      titulo: 'Código de sala', nombre: 'sala', tipo: 'text', placeholder: 'Ingrese el código de la sala', requeridoM: 'El código de la sala es requerido', longitudM: ''
    },
    /*
    {
      titulo: 'Contraseña', nombre: 'password', tipo: 'password', placeholder: 'Ingrese la contraseña', requeridoM: 'La contraseña es requerida', longitudM: ''
    }
     */
  ] as campoInterface[]

  constructor(private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
    this.formGroup = this.formBuilder.group(
      {
        sala: ['', Validators.required],
        //password: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params;
    parametroRuta$
      .subscribe({
        next:(parametrosRuta) => {
          this.nombreUsuario = parametrosRuta['nombre'];
        }
      })
  }

  unirseSala() {
    const sala = this.formGroup.get('sala')?.value
    if(this.validarSala(sala)){
      const ruta = ['/start' , this.nombreUsuario, sala];
      this.router.navigate(ruta);
    }

  }

  validarSala(sala: string) {
    return true;
  }
}
