import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaAnfitrionComponent } from './rutas/ruta-anfitrion/ruta-anfitrion.component';
import { RutaInvitadoComponent } from './rutas/ruta-invitado/ruta-invitado.component';
import { RutaStartComponent } from './rutas/ruta-start/ruta-start.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {SocketIoModule} from "ngx-socket-io";
import { UserGameComponent } from './componentes/user-game/user-game.component';
import { BaseControlComponent } from './componentes/base-control/base-control.component';
import { LobbyComponent } from './componentes/lobby/lobby.component';
import { RutaLetraComponent } from './rutas/ruta-letra/ruta-letra.component';
import { CamposLetraComponent } from './componentes/campos-letra/campos-letra.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { EvaluacionComponent } from './componentes/evaluacion/evaluacion.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaAnfitrionComponent,
    RutaInvitadoComponent,
    RutaStartComponent,
    UserGameComponent,
    RutaHomeComponent,
    BaseControlComponent,
    LobbyComponent,
    RutaLetraComponent,
    CamposLetraComponent,
    ResultadosComponent,
    EvaluacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SocketIoModule.forRoot(
      {
        url: 'ws://localhost:8080',
        options: {}
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
