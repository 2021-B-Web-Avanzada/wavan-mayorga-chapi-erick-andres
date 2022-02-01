import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaProductoraComponent } from './rutas/ruta-productora/ruta-productora.component';
import { RutaPeliculaComponent } from './rutas/ruta-pelicula/ruta-pelicula.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaProductoraInfoComponent } from './rutas/ruta-productora-info/ruta-productora-info.component';
import { RutaPeliculaInfoComponent } from './rutas/ruta-pelicula-info/ruta-pelicula-info.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RutaProductoraComponent,
    RutaPeliculaComponent,
    RutaHomeComponent,
    RutaProductoraInfoComponent,
    RutaPeliculaInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
