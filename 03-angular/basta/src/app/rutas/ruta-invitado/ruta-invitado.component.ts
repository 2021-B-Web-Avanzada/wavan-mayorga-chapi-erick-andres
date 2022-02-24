import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-invitado',
  templateUrl: './ruta-invitado.component.html',
  styleUrls: ['./ruta-invitado.component.scss']
})
export class RutaInvitadoComponent implements OnInit {
  formGroup: FormGroup

  campos = [
    {
      titulo: 'Código de sala', nombre: 'sala', tipo: 'text', placeholder: 'Ingrese el código de la sala', requeridoM: 'El código de la sala es requerido', longitudM: ''
    },
    {
      titulo: 'Contraseña', nombre: 'password', tipo: 'password', placeholder: 'Ingrese la contraseña', requeridoM: 'La contraseña es requerida', longitudM: ''
    }
  ]

  constructor(private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
    this.formGroup = this.formBuilder.group(
      {
        sala: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  unirseSala() {
    const sala = this.formGroup.get('sala')?.value
    if(this.validarSala(sala)){
      const ruta = ['/start' , sala,]; // /productoras/1
      this.router.navigate(ruta);
    }

  }

  validarSala(sala: string) {
    return true;
  }
}
