import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeMicrosfotComponent} from "./rutas/home-microsfot/home-microsfot.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeMicrosfotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
