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
    const parametrosConsulta$ = this.activatedRoute.queryParams;

    parametrosConsulta$.subscribe(
      {
        next:(queryParams)=>{
          console.log(queryParams);
          this.buscarUsuario = queryParams['name']
          this.buscarUsuarios()
        },
        error: ()=>{

        },
        complete: ()=>{

        }
      }
      )
    // this.router.navigate(['/app','/usuario'],{
    //   queryParams: {name: 'asdasd'}
    // })
    // this.buscarUsuarios()
  }

  actualizarParametrosDeConsulta(){
    this.router.navigate(
      ['/app', 'usuario'],
      {
        queryParams: {
          name: this.buscarUsuario
        }
      }
    )
  }


  buscarUsuarios(){
    this.userJphService
      .buscarTodos({
        name: this.buscarUsuario
      })
      .subscribe({
          next: (datos) => { // try then
            this.arreglo = datos;
            this.buscarUsuario = '';
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

  gestionarUsuario(idUsuario:number){
    const ruta = ['/app','usuario', idUsuario]
    this.router.navigate(ruta)

  }

}
