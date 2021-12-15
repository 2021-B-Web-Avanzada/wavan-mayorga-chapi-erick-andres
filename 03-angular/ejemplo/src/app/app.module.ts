import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import {AuthService} from "./services/auth/auth.service";
import {EstaLogeadoGuard} from "./services/auth/esta-logeado.guard";

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaAppComponent,
    RutaUsuarioComponent,
    RutaPostComponent
  ],
  // Modulos importados
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Servicios
  providers: [
    AuthService,
    EstaLogeadoGuard
  ],
  // Componente Principal
  bootstrap: [AppComponent]
})
export class AppModule { }
