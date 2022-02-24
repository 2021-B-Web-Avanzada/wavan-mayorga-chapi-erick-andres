import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaAnfitrionComponent } from './rutas/ruta-anfitrion/ruta-anfitrion.component';
import { RutaInvitadoComponent } from './rutas/ruta-invitado/ruta-invitado.component';
import { RutaLobbyComponent } from './rutas/ruta-lobby/ruta-lobby.component';
import { RutaStartComponent } from './rutas/ruta-start/ruta-start.component';
import { RutaLetraComponent } from './rutas/ruta-letra/ruta-letra.component';
import { RutaEvaluacionComponent } from './rutas/ruta-evaluacion/ruta-evaluacion.component';
import { RutaResultadosComponent } from './rutas/ruta-resultados/ruta-resultados.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { ToastComponent } from './componentes/toast/toast.component';
import {SocketIoModule} from "ngx-socket-io";
import { MensajeChatComponent } from './componentes/mensaje-chat/mensaje-chat.component';
import { UserGameComponent } from './componentes/user-game/user-game.component';
import { GameCategoryComponent } from './componentes/game-category/game-category.component';
import { BaseControlComponent } from './componentes/base-control/base-control.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaAnfitrionComponent,
    RutaInvitadoComponent,
    RutaLobbyComponent,
    RutaStartComponent,
    RutaLetraComponent,
    RutaEvaluacionComponent,
    RutaResultadosComponent,
    RutaHomeComponent,
    ToastComponent,
    MensajeChatComponent,
    UserGameComponent,
    GameCategoryComponent,
    BaseControlComponent
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
