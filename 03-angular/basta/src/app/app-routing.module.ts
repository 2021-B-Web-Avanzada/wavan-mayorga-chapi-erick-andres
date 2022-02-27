import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaAnfitrionComponent} from "./rutas/ruta-anfitrion/ruta-anfitrion.component";
import {RutaInvitadoComponent} from "./rutas/ruta-invitado/ruta-invitado.component";
import {RutaStartComponent} from "./rutas/ruta-start/ruta-start.component";
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
    path: 'anfitrion/:nombre',
    component: RutaAnfitrionComponent
  },
  {
    path: 'invitado/:nombre',
    component: RutaInvitadoComponent
  },
  {
    path: 'start/:nombre/:salaId',
    component: RutaStartComponent
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
