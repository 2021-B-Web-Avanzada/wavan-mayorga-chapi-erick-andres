import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserJphInterface} from "../../services/http/interfaces/user-jph.interface";
import {UserJphService} from "../../services/http/user-jph.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
//import * as console from "console";

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {
  idUsuario = 0
  usuarioActual?: UserJphInterface
  formGroup?: FormGroup

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly userJphService: UserJphService,
              private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl({
        value: 'ejemplo@ejemplo.com',
        disabled: false
      },
        [
          Validators.required, //min,max,minLenght,email,patterns
          Validators.minLength(3)
        ],
        [

        ])
    })
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
        next:(paraemtrosRuta)=>{
          console.log(paraemtrosRuta);
          this.idUsuario = paraemtrosRuta['idUsuario'];
          this.buscarUsuario(this.idUsuario)
        }
      })
  }

  buscarUsuario(id:number){
    const buscarUsuarioId$ = this.userJphService.buscarUno(id);
    buscarUsuarioId$
      .subscribe(
        {
          next: (data) => {
            this.usuarioActual = data
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
  }

}
