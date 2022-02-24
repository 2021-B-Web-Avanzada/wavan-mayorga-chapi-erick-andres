import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaAnfitrionComponent} from "./rutas/ruta-anfitrion/ruta-anfitrion.component";
import {RutaInvitadoComponent} from "./rutas/ruta-invitado/ruta-invitado.component";
import {RutaLobbyComponent} from "./rutas/ruta-lobby/ruta-lobby.component";
import {RutaLetraComponent} from "./rutas/ruta-letra/ruta-letra.component";
import {RutaStartComponent} from "./rutas/ruta-start/ruta-start.component";
import {RutaEvaluacionComponent} from "./rutas/ruta-evaluacion/ruta-evaluacion.component";
import {RutaResultadosComponent} from "./rutas/ruta-resultados/ruta-resultados.component";
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent
  },
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'anfitrion',
    component: RutaAnfitrionComponent
  },
  {
    path: 'invitado',
    component: RutaInvitadoComponent
  },
  {
    path: 'lobby/:salaId',
    component: RutaLobbyComponent
  },
  {
    path: 'start/:salaId',
    component: RutaStartComponent,
    children: [
      {
        path: ':letra/game',
        component: RutaLetraComponent
      },
      {
        path: ':letra/evaluacion',
        component: RutaEvaluacionComponent
      }
    ]
  },
  {
    path: ':salaId/resultados',
    component: RutaResultadosComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
