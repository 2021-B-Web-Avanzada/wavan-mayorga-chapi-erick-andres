import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaProductoraComponent } from './rutas/productora/ruta-productora/ruta-productora.component';
import { RutaPeliculaComponent } from './rutas/pelicula/ruta-pelicula/ruta-pelicula.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaProductoraInfoComponent } from './rutas/productora/ruta-productora-info/ruta-productora-info.component';
import { RutaPeliculaInfoComponent } from './rutas/pelicula/ruta-pelicula-info/ruta-pelicula-info.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaProductoraNuevoComponent } from './rutas/productora/ruta-productora-nuevo/ruta-productora-nuevo.component';
import { RutaPeliculaNuevoComponent } from './rutas/pelicula/ruta-pelicula-nuevo/ruta-pelicula-nuevo.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ModalComponentComponent } from './componentes/modal-component/modal-component.component';
import { BaseControlComponent } from './componentes/base-control/base-control.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaProductoraComponent,
    RutaPeliculaComponent,
    RutaHomeComponent,
    RutaProductoraInfoComponent,
    RutaPeliculaInfoComponent,
    RutaProductoraNuevoComponent,
    RutaPeliculaNuevoComponent,
    ModalComponentComponent,
    BaseControlComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
