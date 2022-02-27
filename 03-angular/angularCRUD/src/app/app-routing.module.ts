import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaProductoraComponent} from "./rutas/productora/ruta-productora/ruta-productora.component";
import {RutaPeliculaComponent} from "./rutas/pelicula/ruta-pelicula/ruta-pelicula.component";
import {RutaProductoraInfoComponent} from "./rutas/productora/ruta-productora-info/ruta-productora-info.component";
import {RutaPeliculaInfoComponent} from "./rutas/pelicula/ruta-pelicula-info/ruta-pelicula-info.component";
import {RutaProductoraNuevoComponent} from "./rutas/productora/ruta-productora-nuevo/ruta-productora-nuevo.component";
import {RutaPeliculaNuevoComponent} from "./rutas/pelicula/ruta-pelicula-nuevo/ruta-pelicula-nuevo.component";

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent
  },
  {
    path: 'productoras',
    component: RutaProductoraComponent,
  },
  {
    path: 'productoras/nuevo',
    component: RutaProductoraNuevoComponent
  },
  {
    path: 'productoras/:idProductora',
    component: RutaProductoraInfoComponent
  },
  {
    path: 'peliculas',
    component: RutaPeliculaComponent,
  },
  {
    path: 'peliculas/nuevo',
    component: RutaPeliculaNuevoComponent
  },
  {
    path: 'peliculas/:idPelicula',
    component: RutaPeliculaInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
