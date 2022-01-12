import { Component, OnInit } from '@angular/core';
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interfaces/user-jph.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  arreglo: UserJphInterface[] = []
  buscarUsuario = ''
  constructor(private readonly userJphService: UserJphService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(
        (queryParams) =>{
          this.buscarUsuario = queryParams['name']
          this.buscarUsuarios()
        }
      )
    // this.router.navigate(['/app','/usuario'],{
    //   queryParams: {name: 'asdasd'}
    // })
    // this.buscarUsuarios()
  }

  buscarUsuarios(){
    this.userJphService
      .buscarTodos({
        name: this.buscarUsuario
      })
      .subscribe({
        next: (datos) =>{
          this.arreglo = datos;
          console.log({datos});
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  gestionarUsuario(idUsuario:number){

  }

}
