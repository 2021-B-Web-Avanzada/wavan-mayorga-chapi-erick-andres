import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaProductoraComponent} from "./rutas/ruta-productora/ruta-productora.component";
import {RutaPeliculaComponent} from "./rutas/ruta-pelicula/ruta-pelicula.component";
import {RutaProductoraInfoComponent} from "./rutas/ruta-productora-info/ruta-productora-info.component";
import {RutaPeliculaInfoComponent} from "./rutas/ruta-pelicula-info/ruta-pelicula-info.component";

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent
  },
  {
    path: 'productoras',
    component: RutaProductoraComponent
  },
  {
    path: 'peliculas',
    component: RutaPeliculaComponent
  },
  {
    path: 'productoras/:idProductora',
    component: RutaProductoraInfoComponent
  },
  {
    path: 'peliculas/:idPelicula',
    component: RutaPeliculaInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
